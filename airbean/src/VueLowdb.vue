<template>
  
</template>

<script>
import VueLowdb from 'vue-lowdb'
vue.use(VueLowdb)
export default {


}

const adapter = new localStorage('db')
const db= low(adapter)

db.defaults({ items: [] })
.write()


//fuction add() {
    db.get('items')
        .push({ time: Date.now})
        .wirte()

//}

function render() {
    const state = db.getState()
    const str = JSON.stringify(state, null,2)
    document.getElementById('state').innerHTML = str
}

document.getElementById('add').onclick = function() {
    add()
    render()
}

render()
</script>


<style>

</style>