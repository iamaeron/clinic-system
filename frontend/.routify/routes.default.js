

export default {
  "meta": {},
  "id": "_default",
  "name": "",
  "file": {
    "path": "src/routes",
    "dir": "src",
    "base": "routes",
    "ext": "",
    "name": "routes"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_dashboard_svelte",
      "name": "dashboard",
      "file": {
        "path": "src/routes/dashboard.svelte",
        "dir": "src/routes",
        "base": "dashboard.svelte",
        "ext": ".svelte",
        "name": "dashboard"
      },
      "asyncModule": () => import('../src/routes/dashboard.svelte'),
      "children": []
    },
    {
      "meta": {
        "isDefault": true
      },
      "id": "_default_index_svelte",
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_signin_svelte",
      "name": "signin",
      "file": {
        "path": "src/routes/signin.svelte",
        "dir": "src/routes",
        "base": "signin.svelte",
        "ext": ".svelte",
        "name": "signin"
      },
      "asyncModule": () => import('../src/routes/signin.svelte'),
      "children": []
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true,
        "order": false,
        "inline": false
      },
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}