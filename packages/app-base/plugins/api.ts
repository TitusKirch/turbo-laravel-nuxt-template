export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();
  // const { session } = useUserSession()
  const api = $fetch.create({
    baseURL: `${runtimeConfig.public.apiUrl}/`,
    onRequest({ request, options, error }) {
      const headers = (options.headers ||= {});
      const addHeader = (key: string, value: string) => {
        if (Array.isArray(headers)) {
          headers.push([key, value]);
        } else if (headers instanceof Headers) {
          headers.set(key, value);
        } else {
          headers[key] = value;
        }
      };

      // set headers
      addHeader('Accept', 'application/json');
      addHeader('Content-Type', 'application/json');
      const csrfToken = useCookie('XSRF-TOKEN').value;
      if (csrfToken) {
        addHeader('X-XSRF-TOKEN', csrfToken);
      }

      const opts: typeof options & {
        prefix?: string;
      } = options || {};

      // check if prefix is set
      if (opts?.prefix) {
        options.baseURL = `${options.baseURL}${opts.prefix}`;
      }

      options.credentials = 'include';

      // if (session.value?.token) {
      //   if (Array.isArray(headers)) {
      //     headers.push(['Authorization', `Bearer ${session.value?.token}`])
      //   } else if (headers instanceof Headers) {
      //     headers.set('Authorization', `Bearer ${session.value?.token}`)
      //   } else {
      //     headers.Authorization = `Bearer ${session.value?.token}`
      //   }
      // }
    },
    async onResponseError({ response }) {
      // if (response.status === 401) {
      //   await navigateTo('/login');
      // }
    },
  });

  // expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  };
});
