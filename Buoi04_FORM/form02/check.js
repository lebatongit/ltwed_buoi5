function check()
{
    var ht =f.HoVaTen.value;
    var dc =f.DiaChi.value;
    var em =f.Email.value;
    var dt =f.SDT.value;
    var emRegExp=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var dtRegExp=/(84|0[3|5|7|8|9])+([0-9]{8})\b/;

   if (ht=='')
   {
       alert('Ho ten khong dươc de trong')
       return false;
   }
   if (dc=='')
   {
       alert('Dia chi khong dươc de trong')
       return false;
   }
   if (em=='')
   {
       alert('Eamil khong dươc de trong')
       return false;
   }
   if (dt=='')
   {
       alert('SĐT khong dươc de trong')
       return false;
   }
   
   if(!emRegExp.test(em))
   {
       alert('EMAIL không hợp lệ')
       return false;

   }

   if(!dtRegExp.test(dt))
   {
       alert('SDT không hợp lệ')
       return false;
       
   }
   return true
    
}