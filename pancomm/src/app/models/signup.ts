export const signup = {
    name :{
        label: "name",
        placeholder: "Name",
        type: "text",
        validation :{
            required:true
        }
    },
    email :{
        label: "email",
        value: "user@panaure.com",
        type: "email",
        validation :{
            required:true,
            pattern :"^[a-z0-9._%+-]+@panamoure+\.com$"
        }
    },
    phone :{
        label: "phone",
        value: "Phone no",
        type: "text",
        validation :{
            required:true
        }
    },
    password :{
        label: "password",
        value: "********",
        type: "password",
        validation :{
            required:true
        }
    },
    job_profile :{
        label: "Job Profile",
        value: "software engineer",
        type: "text",
        validation :{
            required:true
        }
    },
    department :{
        label: "Department",
        value: "development",
        type: "select",
        options:[
            {label:'(choose one)', value:''},
            {label:'Accounts and Finance', value:'accounts&Finance'},
            {label:'Administration', value:'administration'},
            {label:'Database Adminstration', value:'databaseAdminstration'},
            {label:'Management.', value:'management'},
            {label:'Qualaity Analyst', value:'qualaityAnalyst'},
            {label:'Research and development', value:'r&d'},
        ],
        validation :{
            required:true
        }
    },
    
}