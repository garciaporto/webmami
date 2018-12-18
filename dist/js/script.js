function landinglogo(){
 D=document.getElementById("landinglogo")
 SVGDoc=D.getSVGDocument()
  SVGRoot=SVGDoc.documentElement
 who=SVGRoot.firstChild.nextSibling
 whoName="<"+who.nodeName
  whoHow=who.attributes.item(0)
  whoNow=whoHow.nodeName
 whoWhat=whoHow.nodeValue+">"
  alert(whoName+" "+whoNow+"="+whoWhat)
}

function footerlogo(){
 D=document.getElementById("footerlogo")
 SVGDoc=D.getSVGDocument()
  SVGRoot=SVGDoc.documentElement
 who=SVGRoot.firstChild.nextSibling
 whoName="<"+who.nodeName
  whoHow=who.attributes.item(0)
  whoNow=whoHow.nodeName
 whoWhat=whoHow.nodeValue+">"
  alert(whoName+" "+whoNow+"="+whoWhat)
}

function mainlogo(){
 D=document.getElementById("mainlogo")
 SVGDoc=D.getSVGDocument()
  SVGRoot=SVGDoc.documentElement
 who=SVGRoot.firstChild.nextSibling
 whoName="<"+who.nodeName
  whoHow=who.attributes.item(0)
  whoNow=whoHow.nodeName
 whoWhat=whoHow.nodeValue+">"
  alert(whoName+" "+whoNow+"="+whoWhat)
}

jQuery(document).ready(function(){
    jQuery('#cookiesok').live('click', function(event) {
         jQuery('#cookies-banner').hide();
    });
});
