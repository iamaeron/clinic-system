<script>
    import Icon from "@iconify/svelte";

    const { status, icon, alt = false, type } = $props();

    const statusColors = {
        warn: {
            default: "bg-amber-100 text-amber-700",
            alt: "text-amber-600",
        },
        success: {
            default: "bg-emerald-100 text-emerald-700",
            alt: "text-emerald-600",
        },
    };

    const defaultClass =
        "w-max border border-transparent flex items-center pr-2 pl-1 gap-1 py-0.5 text-xs font-semibold rounded-full";
    const altClass =
        "w-max border bg-zinc-50 shadow-md shadow-black/[0.02] border-zinc-200 flex items-center pr-2 pl-1 gap-1 py-0.5 text-xs font-semibold rounded-full";
</script>

<div
    class={[
        alt ? statusColors[type].alt : statusColors[type].default,
        alt ? altClass : defaultClass,
    ].join(" ")}
>
    <Icon {icon} class="thicker-icon w-4 h-4" />
    <span>{status}</span>
</div>
