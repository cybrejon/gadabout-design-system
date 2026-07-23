<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ContainerDecorator from "../utils/ContainerDecorator.svelte";
  import Avatar from "./Avatar.svelte";

  const { Story } = defineMeta({
    title: "Component/Atoms/Forms/Avatar",
    component: Avatar,
    decorators: [() => ContainerDecorator],
  });
</script>

<Story name="Normal" />

<Story name="Small" args={{ size: "sm" }} />

<Story name="Medium" args={{ size: "md" }} />

<Story name="Large" args={{ size: "lg" }} />

<Story name="ExtraLarge" args={{ size: "xl" }} />

<Story
  name="Clickable"
  args={{ onclick: () => alert("Avatar clicked!"), ariaLabel: "User avatar" }}
/>

<Story name="FallbackInitials" args={{ src: "", fallback: "GA" }} />

<Story
  name="FallbackImage"
  args={{ src: "invalid-url.png", fallbackSrc: "/images/agents/fallback.svg" }}
/>
