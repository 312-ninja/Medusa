MEDUSA.config.init=function(){$(".viewIf").on("click",(function(){$(this).prop("checked")?($(".hide_if_"+$(this).attr("id")).css("display","none"),$(".show_if_"+$(this).attr("id")).fadeIn("fast","linear")):($(".show_if_"+$(this).attr("id")).css("display","none"),$(".hide_if_"+$(this).attr("id")).fadeIn("fast","linear"))})),$("#configForm").ajaxForm({beforeSubmit(){$(".config_submitter .config_submitter_refresh").each((function(){$(this).prop("disabled","disabled"),$(this).after('<span><img src="images/loading16'+MEDUSA.config.layout.themeSpinner+'.gif"> Saving...</span>'),$(this).hide()}))},success(){setTimeout((()=>{$(".config_submitter").each((function(){$(this).removeAttr("disabled"),$(this).next().remove(),$(this).show()})),$(".config_submitter_refresh").each((function(){$(this).removeAttr("disabled"),$(this).next().remove(),$(this).show(),window.location.href=$("base").attr("href")+"config/providers/"})),$("#email_show").trigger("notify"),$("#prowl_show").trigger("notify")}),2e3)}}),$("#branchCheckout").on("click",(()=>{const e="home/branchCheckout?branch="+$("#branchVersion").val();$.getJSON("home/getDBcompare",(i=>{"success"===i.status&&("equal"===i.message&&(window.location.href=$("base").attr("href")+e),"upgrade"===i.message&&confirm("Changing branch will upgrade your database.\nYou won't be able to downgrade afterward.\nDo you want to continue?")&&(window.location.href=$("base").attr("href")+e),"downgrade"===i.message&&alert("Can't switch branch as this will result in a database downgrade."))}))}))};