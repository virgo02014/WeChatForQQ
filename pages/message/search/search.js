Page({
    data: {
        inputValue: ''
    },
    bindKeyInput: function(EventHandle){
        console.log(EventHandle);
        this.setData({
            inputValue: EventHandle.detail.value
        });
    }
});
