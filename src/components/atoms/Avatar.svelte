<script>
  import { resolve } from "$app/paths";
  import { Avatar } from "bits-ui";

  /**
   * @typedef {Object} Props
   * @property {string} [src] - The image source URL.
   * @property {string} [alt] - The alternative text for the image.
   * @property {import('svelte').Snippet | string} [fallback] - Fallback text content or snippet shown when the image is unavailable or loading.
   * @property {string} [fallbackSrc] - Fallback image source URL shown when the main image is unavailable or loading.
   * @property {'sm' | 'md' | 'lg' | 'xl'} [size] - Sizing variant of the avatar.
   * @property {string} [href] - An optional URL to make the avatar behave as a link.
   * @property {import('svelte/elements').MouseEventHandler<any>} [onclick] - Click event handler.
   * @property {boolean} [disabled] - Whether the clickable avatar is disabled.
   * @property {string} [ariaLabel] - Accessible label for interactive avatars. Required when alt is empty and href or onclick is set.
   * @property {string} [class] - Additional CSS classes.
   * @property {HTMLElement | null} [ref] - Reference to the root avatar element.
   * @property {HTMLElement | null} [imageRef] - Reference to the image element.
   * @property {HTMLElement | null} [fallbackRef] - Reference to the fallback element.
   * @property {Record<string, any>} [restProps] - Any other props to pass to the underlying Avatar.Root element.
   */

  /** @type {Props} */
  let {
    src = "",
    alt = "",
    fallback = "",
    fallbackSrc = "",
    size = "md",
    href = "",
    onclick,
    disabled = false,
    ariaLabel = "",
    class: style = "",
    ref = $bindable(null),
    imageRef = $bindable(null),
    fallbackRef = $bindable(null),
    ...restProps
  } = $props();

  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
  };
</script>

{#snippet avatarContent()}
  <Avatar.Root
    class="relative flex shrink-0 overflow-hidden rounded-full border border-primary {sizes[
      size
    ]}"
    bind:ref
    {...restProps}
  >
    <Avatar.Image
      {src}
      {alt}
      bind:ref={imageRef}
      class="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
    />
    <Avatar.Fallback
      bind:ref={fallbackRef}
      class="flex h-full w-full items-center justify-center bg-primary/10 text-primary font-medium"
    >
      {#if fallbackSrc}
        <img
          src={fallbackSrc}
          {alt}
          class="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
      {:else if typeof fallback === "function"}
        {@render fallback()}
      {:else}
        {fallback}
      {/if}
    </Avatar.Fallback>
  </Avatar.Root>
{/snippet}

{#if href && !disabled}
  <a
    href={resolve(href)}
    {onclick}
    aria-label={ariaLabel || undefined}
    class="group inline-block rounded-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 outline-none transition-transform duration-200 active:scale-95 cursor-pointer {style}"
  >
    {@render avatarContent()}
  </a>
{:else if onclick && !disabled}
  <button
    type="button"
    {onclick}
    aria-label={ariaLabel || undefined}
    class="group inline-block rounded-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 outline-none transition-transform duration-200 active:scale-95 cursor-pointer {style}"
  >
    {@render avatarContent()}
  </button>
{:else}
  <div
    class="relative inline-block rounded-full {style} {disabled
      ? 'opacity-50 cursor-not-allowed'
      : ''}"
  >
    {@render avatarContent()}
  </div>
{/if}
