function formatState (opt) {

    var optimage = $(opt.element).attr('data-image'); 
    if(!optimage){
       return opt.text.toUpperCase();
    } else {                    
        var $opt = $("<span><img id='logoo' src=" + optimage + " width='24px' /> <span id='job-description'>" + opt.text.toUpperCase() + " </span></span>");
        return $opt;
    }
};

$('#job').select2({
    templateResult: formatState,
    width: '100%',
})