<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./components/Home.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Error404 from "./components/Error404.svelte";

  export let url = "";
</script>

<main class="bg-zinc-800">
  <Router {url}>
    <Navbar />
    <Route path="/" component={Home} />
    <Route path="*" component={Error404} />
  </Router>
</main>
