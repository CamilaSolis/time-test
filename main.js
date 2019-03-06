$('#phone').focusout(function() {

    function phoneFormat() {
      phone = phone.replace(/[^0-9]/g, '');
      phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      return phone;
    }
    var phone = $(this).val();
    phone = phoneFormat(phone);
    $(this).val(phone);
  });