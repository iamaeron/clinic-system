<script>
  import Button from "@/ui/Button.svelte";
  import InputLabel from "@/ui/InputLabel.svelte";
  import TextInput from "@/ui/TextInput.svelte";
  import Icon from "@iconify/svelte";

  // const s = fetch('/api/signin', { method: 'POST' }).then(r => r.text()).then(d => console.log(d));
</script>

<div
  style="background-image: url('/cfsi-campuses.jpg')"
  class="relative bg-no-repeat bg-cover min-h-screen bg-black flex flex-col"
>
  <div class="flex items-center justify-center relative flex-1">
    <div class="bg-black/80 absolute inset-0"></div>
    <!-- <div class="flex items-center justify-center px-10 flex-1 relative">
    <div>
      <img
        src="/cfsi-mabiga-logo.png"
        alt="hey"
        class="w-40 aspect-square bg-cover"
      />
      <h1>Education quality that works.</h1>
    </div>
  </div> -->
    <div class="max-w-xl w-full relative p-4 flex flex-col items-center">
      <div
        class="flex-1 bg-white overflow-hidden w-full h-max flex items-center rounded-xl"
      >
        <div class="w-full">
          <div class="pt-8 px-8 pb-0">
            <div
              class="mb-8 flex items-center rounded-lg gap-4 justify-between py-1 px-2 bg-emerald-50"
            >
              <div>
                <img
                  src="/cfsi-mabiga-logo.png"
                  alt="CFSI Mabiga Logo"
                  class="w-10 aspect-square"
                />
              </div>
              <!-- <div class="border-r h-4 border-black/10"></div> -->
              <h1 class="font-bold tracking-tight text-emerald-700">
                CFSI Mabiga Clinic System
              </h1>
              <!-- <div class="border-r h-4 border-black/10"></div> -->
              <div>
                <Icon
                  icon="tabler:activity-heartbeat"
                  class="w-9 h-9 text-emerald-800"
                />
              </div>
            </div>
          </div>
          <div class="px-8 mb-8">
            <h1 class="text-2xl font-bold tracking-tight text-accent">
              Sign in
            </h1>
            <p class="text-zinc-600 text-sm">
              If you have an account, you can easily log in.
            </p>
          </div>
          <hr class="mb-8 border-zinc-200" />
          <div class="space-y-4 px-8 pb-8">
            <div>
              <InputLabel for="email" required class="mb-1">Email</InputLabel>
              <TextInput autofocus />
            </div>
            <div>
              <InputLabel for="password" required class="mb-1"
                >Password</InputLabel
              >
              <TextInput withIcon>
                <button class="px-2">
                  <Icon icon="tabler:eye" class="w-5 h-5 text-zinc-500" />
                </button>
              </TextInput>
            </div>

            <Button class="!w-full mt-6">Continue</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
