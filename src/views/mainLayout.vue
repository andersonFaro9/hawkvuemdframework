<template>
  <h-main-body
    :show-drawer-left="showDrawer"
    @close-drawer-left="showDrawer = $event"
  >
    <template v-slot:header>
      <h-app-toolbar bg-color="bg-primary">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation text-color="text-white" @click="showDrawer = !showDrawer"/>
          <h-app-toolbar-title class="text-white">
            HawkVueMD Framework 1.0.12-rc.0
          </h-app-toolbar-title>
          <h-app-toolbar-action>
            <h-btn fab size="sm" bg-color="bg-transparent">
              <h-link url="/" icon="fas fa-home" text-color="text-white"/>
            </h-btn>
            <h-btn fab size="sm" bg-color="bg-transparent">
              <h-link url="https://github.com/edutucci/hawkvuemdframework" icon="fab fa-github" text-color="text-white" new-window/>
            </h-btn>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar>
    </template>

    <template v-slot:left>
      <div class="col-auto text-center h-pa-md">
        <div class="column align-items-center">
          <h-image avatar src="img/hawk.jpg" size="64px"/>
          <div class="">Hawk </div>
          <div class=""> Framework</div>
        </div>
      </div>
      <div class="col">
        <h-collapsible>

          <h-collapsible-menu icon="fas fa-question-circle" text="Guide">
            <h-collapsible-item text="Installation" @click="$router.push('/installation'), showDrawer = false"/>
            <h-collapsible-item text="Layout" @click="$router.push('/layout'), showDrawer = false"/>
            <h-collapsible-item text="Page" @click="$router.push('/page'), showDrawer = false"/>
            <h-collapsible-item text="Pallete Color" @click="$router.push('/palleteColor'), showDrawer = false"/>
          </h-collapsible-menu>

          <h-collapsible-menu icon="fab fa-css3" text="CSS">
            <h-collapsible-item text="Borders" @click="$router.push('/borders'), showDrawer = false"/>
            <h-collapsible-item text="Flexbox" @click="$router.push('/flexbox'), showDrawer = false"/>
            <h-collapsible-item text="Positioning" @click="$router.push('/positioning'), showDrawer = false"/>
            <h-collapsible-item text="Spacing" @click="$router.push('/spacing'), showDrawer = false"/>
            <h-collapsible-item text="Text Alignment" @click="$router.push('/textalignment'), showDrawer = false"/>
            <h-collapsible-item text="Visibility" @click="$router.push('/visibility'), showDrawer = false"/>
            <h-collapsible-item text="Others" @click="$router.push('/cssothers'), showDrawer = false"/>
          </h-collapsible-menu>

          <h-collapsible-menu text="Components" icon="fas fa-hdd">
            <h-collapsible-item text="Appbar" @click="$router.push('/appbar'), showDrawer = false"/>
            <h-collapsible-item text="Banner" @click="$router.push('/banner'), showDrawer = false"/>
            <h-collapsible-item text="Buttons" @click="$router.push('/buttons'), showDrawer = false"/>
            <h-collapsible-item text="Button Group" @click="$router.push('/buttongroup'), showDrawer = false"/>
            <h-collapsible-item text="Cards" @click="$router.push('/card'), showDrawer = false"/>
            <h-collapsible-item text="Carousel" @click="$router.push('/carousel'), showDrawer = false"/>
            <h-collapsible-item text="Checkbox" @click="$router.push('/checkbox'), showDrawer = false"/>
            <h-collapsible-item text="Chips" @click="$router.push('/chip'), showDrawer = false"/>
            <h-collapsible-item text="Collapsible" @click="$router.push('/collapsible'), showDrawer = false"/>
            <h-collapsible-item text="Date and Time" @click="$router.push('/datetime'), showDrawer = false"/>
            <h-collapsible-item text="Dialog" @click="$router.push('/dialog'), showDrawer = false"/>
            <h-collapsible-item text="Drawer" @click="$router.push('/drawer'), showDrawer = false"/>
            <h-collapsible-item text="File Upload" @click="$router.push('/fileupload'), showDrawer = false"/>
            <h-collapsible-item text="HtmlTable" @click="$router.push('/htmltable'), showDrawer = false"/>
            <h-collapsible-item text="Icons" @click="$router.push('/icon'), showDrawer = false"/>
            <h-collapsible-item text="Image" @click="$router.push('/compimage'), showDrawer = false"/>
            <h-collapsible-item text="Input Textfield" @click="$router.push('/input'), showDrawer = false"/>
            <h-collapsible-item text="List" @click="$router.push('/list'), showDrawer = false"/>
            <h-collapsible-item text="Radio" @click="$router.push('/radio'), showDrawer = false"/>
            <h-collapsible-item text="Range Slider" @click="$router.push('/rangeslider'), showDrawer = false"/>
            <h-collapsible-item text="Rating" @click="$router.push('/rating'), showDrawer = false"/>
            <h-collapsible-item text="SideBar Menu" @click="$router.push('/sideBarMenu'), showDrawer = false"/>
            <h-collapsible-item text="Tab" @click="$router.push('/tab'), showDrawer = false"/>
            <h-collapsible-item text="Table" @click="$router.push('/table'), showDrawer = false"/>
            <h-collapsible-item text="Toggle" @click="$router.push('/toggle'), showDrawer = false"/>
            <h-collapsible-item text="Video" @click="$router.push('/video'), showDrawer = false"/>
          </h-collapsible-menu>

          <h-collapsible-menu icon="fas fa-plug" text="Plugins">
            <h-collapsible-item text="Loading" @click="$router.push('/loading'), showDrawer = false"/>
            <h-collapsible-item text="SnackBar" @click="$router.push('/snack'), showDrawer = false"/>
          </h-collapsible-menu>

        </h-collapsible>
      </div>
      <div class="col-auto">
        <div class="text-center h-pa-md">
          <h2 class="no-margin">Free Framework</h2>
          <h2 class="no-margin">Pure CSS</h2>
        </div>
      </div>

    </template>

    <template v-slot:footer>
      <div class="flex justify-center align-items-center bg-primary text-white" style="height: 60px">
        <div class="text-h6">HawkVueMD Page Footer</div>
      </div>
    </template>

    <router-view/>
  </h-main-body>
</template>

<script>

export default {
  data () {
    return {
      showDrawer: false
    }
  }
}
</script>

<style scoped>
</style>
