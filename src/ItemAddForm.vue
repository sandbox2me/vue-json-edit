<template>

      <v-card>
        <v-card-title >

              <div class="add-form pure-form">
                  <div class="f-input">

                   <!-- <v-icon left>lock_outline</v-icon> -->
                   <input v-if="needName" v-model="keyName" type="text" class="f-input-m" placeholder="Ключ, имя" ></input>
                   
                   <!-- <v-icon left>list</v-icon> -->
                    <select v-model="formatSelected" class="f-input-m">
                        <option :value="item" v-for="(item, index) in formats" :key="item">{{item}}</option>
                    </select>
                    <span class="f-input-m"><b>:</b></span>

                    <!-- <v-icon left>code</v-icon> -->
                    <template v-if="formatSelected !='array' && formatSelected != 'object'">
                        <input type="text" v-model="valName" class="f-input-m" placeholder="данные текст" v-if="formatSelected == 'string'">
                        <input type="number" v-model="valName" class="f-input-m" placeholder="данные цифры" v-if="formatSelected == 'number'" @change="dealNumber">
                        <select name="value" v-model="valName" class="f-input-m" v-if="formatSelected == 'boolean'" @change="dealBoolean">
                            <option :value="true">true</option>
                            <option :value="false">false</option>
                        </select>
                    </template>
                  </div>
              </div>

        </v-card-title>
        <v-card-actions>
            <v-btn @click="confirm">{{ ru.save }}</v-btn>
            <v-btn @click="cancel">{{ ru.cancel }}</v-btn>
        </v-card-actions>
      </v-card>


</template>

<script>
// import Vuetify from 'vuetify'
export default {
    name: "ItemAddForm",
    data: function() {
        return {
            'flowData': [],
            'toAddItem': false,
            'hideMyBlock': {},
            ru: { 
                save: 'сохранить',
                cancel: 'нет',
                formats: ["строка", "массив", "объект", "номер", "булево"]
            },
            formats: ["string", "array", "object", "number", "boolean"],
            formatSelected: "string",
            //--
            keyName: "",
            valName: ""
        };
    },
    props: {
        needName: {
            default: true
        }
    },
    methods: {
        confirm: function() {
            let val = null;
            if (
                this.formatSelected === "array" ||
                this.formatSelected === "object"
            ) {
                val = [];
            } else {
                val = this.valName;
            }

            let objData = {
                key: this.needName ? this.keyName : null,
                val: val,
                type: this.formatSelected
            };

            this.$emit("confirm", objData);
            this.keyName = "";
            this.valName = "";
            this.formatSelected = "string";
        },

        cancel: function() {
            this.$emit("cancel");
        },

        dealBoolean: function() {
            this.valName = Boolean(this.valName);
        },

        dealNumber: function() {
            this.valName = Number(this.valName);
        }
    }
};
</script>

<style type="text/css">
.f-input,
.f-btns {
    display: inline-block;
}

.f-btns {
    display: inline-block;
    margin-top: 0.5em;
}

.f-confirm {
    color: #fff;
    background: #05a5d1;
}

.add-form {
    font-size: 16px;
}

.f-input-m {
    border-bottom: 1px dotted lightgrey;
}
</style>