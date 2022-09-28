     
     function validated()
  { 
     var firstname= document.forms["myform"]["firstname"].value;
      var lastname= document.forms["myform"]["lastname"].value;
      var dob= document.forms["myform"]["dob"].value;
      var email= document.forms["myform"]["email"].value;
      var phoneno= document.forms["myform"]["phoneno"].value;
      var gender= document.forms["myform"]["gender"].value;
      var country= document.forms["myform"]["country"].value;
      var check= document.getElementById("check");
      var first_check=0,last_check=0,dob_check=0,email_check=0,phoneno_check=0,gender_check=0,country_check=0,check_check=0;

      first_check     = firstnamevalidation(firstname);
      last_check      = lastnamechecking(lastname);
      dob_check       = dobchecking(dob);
      email_check     = emailchecking(email);
      phoneno_check   = phonenocheck(phoneno);
      gender_check    = genderchecking(gender);
      country_check   = countrychecking(country);
      check_check     = checkboxchecking(check);

      if(first_check)
      { 
        if(last_check)
        {
            if(dob_check)
            {
                if(email_check)
                {
                    if(phoneno_check)
                    {
                        if(gender_check)
                        {
                            if(country_check)
                            {
                                if(check_check)
                                {
                                     alert("Form successfully submitted with valid data");
                                }
                                else
                                {
                                    alert("Please select Terms and conditions");
                                    return false;
                                }
                            }
                            else
                            {
                               alert("Please select country");
                               return false;
                            }
                        }
                        else
                        {
                          alert("Please select valid gender");
                          return false;
                        }
                    }
                    else
                    {
                      alert("Please kindly enter valid phone number");
                      return false;
                    }
                }
                else
                {
                   alert("Please kindly enter valid email");
                   return false;
                }
            }
            else
            {
              alert("Please kindly enter valid date of birth");
              return false;
            }
        }
        else
        {
          alert("Please kindly enter a valid lastname");
          return false;
        }
      }
      else
      {
        alert("Please kindly enter a valid firstname");
        return false;
      }

 }
                                              

  function firstnamevalidation(firstname)
  {
      if(firstname=="")
      {
        return false;
      }
      var firstnameregex = /^[a-zA-Z]*$/
     if(firstnameregex.test(firstname)==false) 
      {
          return false;
      }
      else
      {
        return true;
      }

  }

  function lastnamechecking(lastname)
  {
    if(lastname=="")
    {
      return false;
    }
    var lastnameregex = /^[a-zA-Z]*$/;
    if (lastnameregex.test(lastname) == false) 
    {
      return false;
    }
    else 
    {
      return true;
    }

  }

  function dobchecking(dob)
  {
      if(dob=="")
      {
        return false;
      }
      else 
      {
        return true;
      }
  }

  function emailchecking(email)
  {
      if(email=="")
      {
        return false;
      }
      var emailregex = /^[a-zA-Z0-9]*[@][a-zA-Z0-9]*(.com)$/;
     if (emailregex.test(email) == false) 
      {
        return false;
      }
      else
      {
        return true;
      }
  }

  function phonenocheck(phoneno)
  {
    if(phoneno=="")
    {
        return false;
    }
      var phonenumberregex = /^[6-9]\d{9}$/;
      if (phonenumberregex.test(phoneno) == false) 
      {
         return false;
      }
    else 
    {
      return true;
    }
  }

  function genderchecking(gender)
  {
    if(gender=="")
    {
      return false;
    }
    else 
    {
      return true;
    }
  }

  function countrychecking(country)
  {
    if(country=="")
    {
      return false;
    }
    else 
    {
      return true;
    }
  }

  function checkboxchecking(check)
  {
    if (!check.checked) 
    {
      return false;
    }
    else 
    {
      return true;
    }
  }