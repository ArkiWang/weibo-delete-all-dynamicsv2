function deleteMessage() {
    // 负反馈（会员营销改变第一条属性）
    let iDom = document.getElementsByClassName('woo-font woo-font--cross morepop_action_bk3Fq morepop_cross_1Q1PF')[0];
    if (!iDom) {
        // 下箭头
        iDom = document.getElementsByClassName('woo-font woo-font--angleDown morepop_action_bk3Fq')[0];
    }
    if (iDom) {
        iDom.click();
        setTimeout(() => {
            let items = document.getElementsByClassName('woo-box-flex woo-box-alignCenter woo-pop-item-main');
            for (let i = 0; i < items.length; i++) {
                if (items[i].textContent == '删除' || items[i].textContent == '取消快转') {
                    items[i].click();
                    break;
                }
            }

        }, 10)
        setTimeout(() => {
            // 确认删除框 确认点击
            let confirm = document.getElementsByClassName('woo-button-main woo-button-flat woo-button-primary woo-button-m woo-button-round woo-dialog-btn')[0];
            if (confirm) {
                console.log('deleted')
                confirm.click();
            }
            setTimeout(() => {
                // 重复执行
                deleteMessage()
            }, 100)
        }, 300)
    }
}
// 执行
deleteMessage()