function check()
{
    //luu y dat ten cho from la f
  
    var HT= f.HoVaTen.value;
    var GT= f.GhiChu.value;

    
    if(HT=='')
    {
        alert('Tên  không được bỏ trống');
        return false;
    }
    if(GT=='')
    {
        alert(' Vui lòng nhập ghi chu không được bỏ trống');
        return false;
    }
    return true;
}