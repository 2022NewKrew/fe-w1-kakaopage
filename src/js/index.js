    $(".sub_header").addEventListener("click", (e) => {
        const $navTab = e.target.closest("a")
        const tabID = parseInt(e.target.dataset.tabId);
        if (chkNotWebtoonTab($navTab)) {
            changeActiveTab($navTab, tabID);
            deleteMainElements();
            addMainElements(".main_others");
            return;
        }
        if (chkDuplicatedWebtoonTab()) {
            return;
        }
        changeActiveTab($navTab, tabID);
        deleteMainElements();
        addMainElements(".main_webtoon");
        addWebtoonList("월");
        setEventWeekdaysButton();
    });  
