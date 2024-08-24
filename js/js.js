// WOW动画
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
    new WOW().init();
};

$(document).ready(function() {

    // menu主菜单动画
    "use strict";

    var Core = {

        DOMReady: function() {

            var self = this;

            self.navigation.init();
            // self.navResp();

        },

        windowLoad: function() {

            var self = this;

        },

        /**
         **	Main navigation
         **/

        navigation: {

            init: function() {

                var self = this;

                self.w = $(window);
                self.wHeight = self.w.height();
                self.body = $('body');
                self.nav = $('.navigation');
                self.section = $('.section');
                self.sectionQt = self.section.length;
                self.headerPos = 1;

                self.anchorScroll();
                self.responsiveMenu.events();
                self.changeHeader();

                self.w.on('scroll', function() {

                    self.pageScroll();
                    self.changeHeader();

                });

                self.w.on('resize', function() {

                    self.wHeight = self.w.height();
                    self.responsiveMenu.menuClose();

                });

            },

            anchorScroll: function() {

                var self = this;

                self.nav.on('click', "a", function(event) {

                    event.preventDefault();

                    var $this = $(this),
                        item = $this.parent(),
                        dataId = $this.attr('href'),
                        offset = $(dataId).offset().top;


                    item.addClass('current').siblings().removeClass('current');

                    self.scrollContent(offset + 10);

                });

            },

            scrollContent: function(offset) {

                var self = this;

                self.body.addClass('scrollContent');
                var ofScroll;
                if (self.w.width() > 767) {
                    ofScroll = offset - 80;
                } else {
                    ofScroll = offset - 60;
                }

                $('html,body').stop().animate({

                    scrollTop: ofScroll

                }, 1000, function() {

                    self.body.removeClass('scrollContent');

                });

            },

            pageScroll: function() {

                var self = this;

                if (self.body.hasClass('scrollContent')) return;

                self.wScroll = self.w.scrollTop();
                self.wHeightHalf = self.w.height() / 2;

                for (var i = 0; i <= self.sectionQt - 1; i++) {

                    var offset = $(self.section[i]).offset().top,
                        heightBox = $(self.section[i]).outerHeight(),
                        bottomOffset = $(self.section[i + 1]).length ? $(self.section[i + 1]).offset().top : offset + heightBox,
                        id = $(self.section[i]).attr('id'),
                        activItem = $('.navigation').find("a[href='" + "#" + id + "']").parent();

                    $('.navigation li').removeClass('active');
                    $('.navigation_point li').removeClass('navigation_point_active');

                    if (self.wScroll + self.wHeightHalf > offset && self.wScroll + self.wHeightHalf < bottomOffset) {

                        setTimeout(function() {

                        }, 1000)

                        activItem.addClass('current').siblings().removeClass('current');

                        return false;

                    }

                };

            },

            changeHeader: function() {

                var self = this,
                    wScroll = self.w.scrollTop();

                if (wScroll < self.wHeight / 2) {

                    if (self.headerPos != 1) {

                        $('.header').removeClass('header_sticky').stop().css({ 'top': 0 });

                    }
                    self.headerPos = 1;
                } else if (wScroll >= self.wHeight / 2 && wScroll < self.wHeight - 80) {

                    if (self.headerPos != 2) {

                        if ($('.header').hasClass('header_sticky')) {

                            $('.header').stop().animate({ top: "-80px" }, 300);

                        } else {

                            $('.header').addClass('header_sticky').stop().css({ 'top': '-80px' });

                        }

                    }

                    self.headerPos = 2;

                } else if (wScroll >= self.wHeight - 80) {
                    if (self.headerPos != 3) {

                        $('.header').addClass('header_sticky').stop().animate({ top: 0 }, 300);

                    }
                    self.headerPos = 3;
                }

            },

            responsiveMenu: {

                events: function() {

                    var self = this;

                    self.nav = $('.navigation');
                    self.navButton = $('.btn_nav ');

                    self.navButton.on('click', function() {

                        if (self.nav.hasClass('open_menu')) {

                            self.menuClose();

                        } else {

                            self.menuOpen();

                        }

                    });

                    self.nav.on('click', 'a', function() {

                        self.menuClose();

                    });

                },

                menuOpen: function() {

                    var self = this;

                    self.nav.addClass('open_menu');
                    self.navButton.addClass("active").next(".header-nav").addClass("active");

                },

                menuClose: function() {

                    var self = this;

                    self.nav.removeClass('open_menu');
                    self.navButton.removeClass("active").next(".header-nav").removeClass("active");

                },

            },

        },

    }


    $(document).ready(function() {

        Core.DOMReady();

    });

    // $(window).load(function(){

    // 	Core.windowLoad();

    // });
    // 以下为按钮滑动效果
    $('a').smoothScroll({
        speed: 900
    });

    //slider arrows appear
    //*************************************
    slider.on('mouseover', function() {
        pointerPrev.addClass("pointer_prev_show");
        pointerNext.addClass("pointer_next_show");
    });
    $(".pointer").on('mouseover', function() {
        pointerPrev.addClass("pointer_prev_show");
        pointerNext.addClass("pointer_next_show");
    });
    $(".pointer-container").on('mouseover', function() {
        pointerPrev.addClass("pointer_prev_show");
        pointerNext.addClass("pointer_next_show");
    });

    //slider arrows hide
    //*************************************
    slider.on('mouseleave', function() {
        pointerPrev.removeClass("pointer_prev_show");
        pointerNext.removeClass("pointer_next_show");
    });

});