const whiteListUrl = chrome.runtime.getURL('whitelist.txt');
const blackListUrl = chrome.runtime.getURL('blacklist.txt');

let whiteList, blackList;

const selectorList = [
    '.ProductGridItem__itemOuter__5ow0w ProductGridItem__fixed__1w9d4',
    '.s-matching-dir .s-widget-container',
    '.a-carousel-card',
];


function listAdd(list, type) {
    $.each(list,function(e,productItem){
        $.each(selectorList, function(e,i){
            if(productItem.trim()!="") {
                $(i+":contains('"+productItem.trim()+"')").addClass(type);
                console.log(productItem + "=>" + type);
            }
            
        });
    });
}

$.get(whiteListUrl, function(d){
    whiteList = d.split('\r\n')
    listAdd(whiteList,"whitelist");
});

$.get(blackListUrl, function(d){
    blackList = d.split('\r\n')
    listAdd(blackList,"blacklist");

});


