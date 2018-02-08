<template>
  <v-app app>
  	<main>
	  <v-container grid-list-md text-xs-center>
	    <v-layout row wrap>
	      <v-flex xs6 id="jsoneditor">
	      </v-flex>
	    </v-layout>
	  </v-container>
    </main>
  </v-app>
</template>

<script>
import JSONEditor from 'jsoneditor'

	export default {
		name: 'app',
		data: function() {
			return {
				jsonData: {
					name: 'jinkin',
					age: 12,
					address: ['Panyu Shiqiao on Canton', 'Tianhe', {
						namll: 'world inside',
						city: 'forida meta 11'
					}, ['nammm', 'fefasas', 'cadasda'], {
						ge: 'asdasdasd',
						grqq: 'adsadasdsad'
					}],
					ohters: {
						id: 1246,
						joinTime: '2017-08-20. 10:20',
						description: 'another man'
					}
				}
			}
		},
		mounted: function() {
      // create the editor
      var container = document.getElementById("jsoneditor");
      var options = {};
      var editor = new JSONEditor(container, options);

      // set json
      var json = {
          "Array": [1, 2, 3],
          "Boolean": true,
          "Null": null,
          "Number": 123,
          "Object": {"a": "b", "c": "d"},
          "String": "Hello World"
      };
      editor.set(this.jsonData);
		}
	}
</script>

<style>
	@import url('../node_modules/jsoneditor/dist/jsoneditor.css');
</style>


