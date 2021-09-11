const formLoader = {


    submit: function(form,callback){

        

        if( typeof(form) ===  "string" )
        {
            form = document.querySelector(form);
        }

        
        if(form instanceof Element)
        {

            const submitListener = (e) => {

                e.preventDefault();
            
                const values = this.getInputData(e.target);
            
                callback(values);
                
            
            };
            
            form.addEventListener('submit',submitListener);

        }


    },



  

    getInputData: function (form) {

        let inputs = {}

        const typesData = {

            "radio" : function(obj,elem){

                if(elem.checked)
                     obj[elem.name] =  elem.value ;

            },
            "checkbox": function(obj,elem){

                if(obj[elem.name] == "")
                    obj[elem.name] = [];

                if(elem.checked)
                     obj[elem.name].push(elem.value);

            }
            
        }
        

        Array.prototype.map.call(form.elements, (elem) => {

            
            if(typesData[elem.type] !== undefined)
            {
                typesData[elem.type](inputs,elem)
            }
            else if(elem.name != "")
            {
                inputs[elem.name] = elem.value;
            }
                
        });



        return inputs;

    }

}