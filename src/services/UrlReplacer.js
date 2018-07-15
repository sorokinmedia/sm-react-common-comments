/* eslint-disable */
export function findAndReplaceLinks(inputText) {
    function indexOf(arr, value, from) {
        for (var i = from || 0, l = (arr || []).length; i < l; i++) {
            if (arr[i] == value) return i;
        }
        return -1;
    }

    function clean(str) {
        return str ? str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '';
    }

    function replaceEntities(str) {
        return se('<textarea>' + ((str || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')) + '</textarea>').value;
    }

    function se(html) {
        return ce('div', {innerHTML: html}).firstChild;
    }

    function ce(tagName, attr, style) {
        var el = document.createElement(tagName);
        if (attr) extend(el, attr);
        if (style) setStyle(el, style);
        return el;
    }

    function setStyle(elem, name, value) {
        elem = ge(elem);
        if (!elem) return;
        if (typeof name == 'object') return each(name, function (k, v) {
            setStyle(elem, k, v);
        });
        if (name == 'opacity') {
            if (browser.msie) {
                if ((value + '').length) {
                    if (value !== 1) {
                        elem.style.filter = 'alpha(opacity=' + value * 100 + ')';
                    } else {
                        elem.style.filter = '';
                    }
                } else {
                    elem.style.cssText = elem.style.cssText.replace(/filter\s*:[^;]*/gi, '');
                }
                elem.style.zoom = 1;
            }
            ;
            elem.style.opacity = value;
        } else {
            try {
                var isN = typeof(value) == 'number';
                if (isN && (/height|width/i).test(name)) value = Math.abs(value);
                elem.style[name] = isN && !(/z-?index|font-?weight|opacity|zoom|line-?height/i).test(name) ? value + 'px' : value;
            } catch (e) {
                debugLog('setStyle error: ', [name, value], e);
            }
        }
    }

    function extend() {
        var a = arguments, target = a[0] || {}, i = 1, l = a.length, deep = false, options;

        if (typeof target === 'boolean') {
            deep = target;
            target = a[1] || {};
            i = 2;
        }

        if (typeof target !== 'object' && !isFunction(target)) target = {};

        for (; i < l; ++i) {
            if ((options = a[i]) != null) {
                for (var name in options) {
                    var src = target[name], copy = options[name];

                    if (target === copy) continue;

                    if (deep && copy && typeof copy === 'object' && !copy.nodeType) {
                        target[name] = extend(deep, src || (copy.length != null ? [] : {}), copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    }

    var replacedText = (inputText || '').replace(/(^|[^A-Za-z0-9А-Яа-яёЁ\-\_])(https?:\/\/)?((?:[A-Za-z\$0-9А-Яа-яёЁ](?:[A-Za-z\$0-9\-\_А-Яа-яёЁ]*[A-Za-z\$0-9А-Яа-яёЁ])?\.){1,5}[A-Za-z\$рфуконлайнстРФУКОНЛАЙНСТ\-\d]{2,22}(?::\d{2,5})?)((?:\/(?:(?:\&amp;|\&#33;|,[_%]|[A-Za-z0-9А-Яа-яёЁ\-\_#%?+\/\$.~=;:]+|\[[A-Za-z0-9А-Яа-яёЁ\-\_#%?+\/\$.,~=;:]*\]|\([A-Za-z0-9А-Яа-яёЁ\-\_#%?+\/\$.,~=;:]*\))*(?:,[_%]|[A-Za-z0-9А-Яа-яёЁ\-\_#%?+\/\$.~=;:]*[A-Za-z0-9А-Яа-яёЁ\_#%?+\/\$~=]|\[[A-Za-z0-9А-Яа-яёЁ\-\_#%?+\/\$.,~=;:]*\]|\([A-Za-z0-9А-Яа-яёЁ\-\_#%?+\/\$.,~=;:]*\)))?)?)/ig,
        function () { // copied to notifier.js:3401
            var matches = Array.prototype.slice.apply(arguments),
                prefix = matches[1] || '',
                protocol = matches[2] || 'http://',
                domain = matches[3] || '',
                url = domain + (matches[4] || ''),
                full = (matches[2] || '') + matches[3] + matches[4];

            if (domain.indexOf('.') == -1 || domain.indexOf('..') != -1) return matches[0];
            var topDomain = domain.split('.').pop();
            if (topDomain.length > 6 || indexOf('info,name,aero,arpa,coop,museum,mobi,travel,xxx,asia,biz,com,net,org,gov,mil,edu,int,tel,ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,bd,be,bf,bg,bh,bi,bj,bm,bn,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,ck,cl,cm,cn,co,cr,cu,cv,cx,cy,cz,de,dj,dk,dm,do,dz,ec,ee,eg,eh,er,es,et,eu,fi,fj,fk,fm,fo,fr,ga,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gu,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,il,im,in,io,iq,ir,is,it,je,jm,jo,jp,ke,kg,kh,ki,km,kn,kp,kr,kw,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mm,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,mz,na,nc,ne,nf,ng,ni,nl,no,np,nr,nu,nz,om,pa,pe,pf,pg,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,ru,rs,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,ss,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,um,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,ye,yt,yu,za,zm,zw,рф,укр,сайт,онлайн,срб,cat,pro,local'.split(','), topDomain) == -1) {
                if (!/^[a-zA-Z]+$/.test(topDomain) || !matches[2]) {
                    return matches[0];
                }
            }

            if (matches[0].indexOf('@') != -1) {
                return matches[0];
            }
            try {
                full = decodeURIComponent(full);
            } catch (e) {
            }

            if (full.length > 55) {
                full = full.substr(0, 53) + '..';
            }
            full = clean(full).replace(/&amp;/g, '&');

            url = replaceEntities(url).replace(/([^a-zA-Z0-9#%;_\-.\/?&=\[\]])/g, encodeURIComponent);
            var tryUrl = url, hashPos = url.indexOf('#/');
            if (hashPos >= 0) {
                tryUrl = url.substr(hashPos + 1);
            } else {
                hashPos = url.indexOf('#!');
                if (hashPos >= 0) {
                    tryUrl = '/' + url.substr(hashPos + 2).replace(/^\//, '');
                }
            }
            return prefix + '<a href="' + (protocol + url).replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '" target="_blank">' + full + '</a>';
        });

    return {__html: replacedText};
}
