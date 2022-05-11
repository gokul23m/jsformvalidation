class FormValidation{
  formValues = {
      username : "",
      password : "", 
  }
  errorValues = {
      usernameErr : "",
      passwordErr : "",
  }
  showErrorMsg(index,msg){
      const form_group = document.getElementsByClassName('formcontrol')[index]
      form_group.classList.add('error')
      form_group.getElementsByTagName('small')[0].textContent = msg   
  }
  showSuccessMsg(index){
      const form_group = document.getElementsByClassName('formcontrol')[index]
      form_group.classList.remove('error')
      form_group.classList.add('success')
  }
  getInputs(){
      this.formValues.username = document.getElementById('username').value.trim()
      this.formValues.password = document.getElementById('password').value.trim()
     
  }
  validateUsername(){
      if(this.formValues.username === ""){
          this.errorValues.usernameErr = "* Please Enter Your Name"
          this.showErrorMsg(0,this.errorValues.usernameErr)
      } else if(this.formValues.username.length <= 4 ){
          this.errorValues.usernameErr = "* Username must be atleast 5 Characters"
          this.showErrorMsg(0,this.errorValues.usernameErr)
      } else if(this.formValues.username.length > 14){
          this.errorValues.usernameErr = "* Username should not exceeds 14 Characters"
          this.showErrorMsg(0,this.errorValues.usernameErr)
      } else {
          this.errorValues.usernameErr = ""
          this.showSuccessMsg(0)
      }
  }
 
  validatePassword(){
      if(this.formValues.password === ""){
          this.errorValues.passwordErr = "* Please Provide a Password"
          this.showErrorMsg(1,this.errorValues.passwordErr)
      } else if(this.formValues.password.length <= 4){
          this.errorValues.passwordErr = "* Password must be atleast 5 Characters"
          this.showErrorMsg(1,this.errorValues.passwordErr)
      } else if(this.formValues.password.length > 10){
          this.errorValues.passwordErr = "* Password should not exceeds 10 Characters"
          this.showErrorMsg(1,this.errorValues.passwordErr)
      } else {
          this.errorValues.passwordErr = ""
          this.showSuccessMsg(1)
      }
  }
 


  removeInputs(){
      const form_groups = document.getElementsByClassName('formcontrol')
      Array.from(form_groups).forEach(element => {
          element.getElementsByTagName('input')[0].value = ""
          element.getElementsByTagName('small')[0].textContent = ""
          element.classList.remove('success')
      })
  }
} 

const ValidateUserInputs = new FormValidation()

document.getElementsByClassName('form')[0].addEventListener('submit' , event => {
  event.preventDefault()
  ValidateUserInputs.getInputs()
  ValidateUserInputs.validateUsername()

  ValidateUserInputs.validatePassword()

})