function formatState (opt) {

    let optimage = $(opt.element).attr('data-image'); 
    if(!optimage){
       return opt.text.toUpperCase();
    } else {                    
        let $opt = $(
           `<span><img id="logoo" src="${optimage}" width="24px" /> <span id="job-description">${opt.text.toUpperCase()}</span> </span>`
        );
        return $opt;
    }
};

export default $('#job').select2({
    templateResult: formatState,
})