<script setup lang="ts">
  definePageMeta({
    title: 'page.auth.password.forgot.success.title',
    description: 'page.auth.password.forgot.success.description',
    middleware: ['guest'],
  });
</script>

<template>
  <UPage>
    <UPageBody>
      <PageCardGrid>
        <AuthCard :title="$t('page.auth.password.forgot.success.authCard.title')">
          <template #description>
            <i18n-t
              keypath="page.auth.password.forgot.success.authCard.description"
              tag="p"
              class="mt-1 text-gray-500 dark:text-gray-400"
            >
              <BaseLink
                :to="{
                  name: 'auth-login',
                }"
              >
                {{ $t('global.action.auth.login.label') }}
              </BaseLink>
            </i18n-t>
          </template>
        </AuthCard>
      </PageCardGrid>
    </UPageBody>
  </UPage>
</template>
