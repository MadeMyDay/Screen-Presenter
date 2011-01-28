$(function() {
				/*
				general settings:
				gridWidth: width of your presentation content, basis for your x-axis. For example if your layout is based on the 960.gs-framework, the gridWith setting would be 960. This is NOT the image width.
				tooltipWidth: Standard width of your tooltips. Can be altered in every step
						
				Settings for each step of your presentation:
				screenNumber: The image to be shown. Same order as in your index.html.
				name: a unique identifier for your tooltip / screen / intro page. Serves as anchor name (default: step[number])
				showAsIntro: If true, an overlay is generated. Used for introducing a set of tooltips.
				posX: Position of the tooltip on x-axis (not needed on intro pages or if text is empty)
				posY: Position of the tooltip on y-axis (not needed on intro pages or if text is empty)
				tooltipWidth: Width of the tooltip (default: 250)
				color: the color of the tooltip or the intro page (black | white, default: black)
				text: the text inside the tooltip / the intro page. Leave empty for showing only the screen. (default empty)
				position: the position of the tip. Possible values are
					TL	top left
					TR  top right
					BL  bottom left
					BR  bottom right
					LT  left top
					LB  left bottom
					RT  right top
					RB  right bottom
					T   top
					R   right
					B   bottom
					L   left
				 */
				var gridWidth = 1000,
					tooltipWidth = 250,
					config = [
					{
						"screenNumber" 		: 1,
						"name"		: "start",
						"showAsIntro"	: true,
						"posX"		: 200,
						"posY"		: 200,
						"tooltipWidth" : 450,
						"bgcolor"	: "black",
						"position"	: "TL",
						"text"		: "<b>Welcome to Screen Presenter!</b><br>V1 | 26.01.2011<br><br>Screen Presenter is a tool for showing your layouts to customers. Neither PDFs nor mail attachments are a appropriate way of showing something designed for a browser.<br><br><small>For navigating through the tour use the buttons on the bottom left.</small>"
					},
					{
						"screenNumber" 		: 1,
						"name"		: "screen1",
						"showAsIntro"	: false,
						"posX"		: 200,
						"posY"		: 200,
						"tooltipWidth" : 450,
						"bgcolor"	: "black",
						"position"	: "TL",
						"text"		: ""
					},
					{
						"screenNumber" 		: 1,
						"bgcolor"	: "black",
						"name"		: "intro",
						"showAsIntro"	: false,
						"posX"		: 5,
						"posY"		: 190,
						"tooltipWidth" : 250,
						"text"		: "Oh my god, tooltips. Nice. Explain what your thoughts were while designing this layout",
						"position"	: "TL"
					},
					{
						"screenNumber" 		: 1,
						"name"		: "logo",
						"bgcolor"	: "black",
						"posX"		: 240,
						"showAsIntro"	: false,
						"posY"		: 100,
						"tooltipWidth" : 250,
						"text"		: "Outstanding logo. You can put your arrows where you like (left in this case)",
						"position"	: "L"
					},
					{
						"screenNumber" 		: 1,
						"bgcolor"	: "black",
						"name"		: "menu",
						"showAsIntro"	: false,
						"posX"		: 800,
						"posY"		: 90,
						"tooltipWidth" : 500,
						"text"		: "Clean and usable Navigation. Got it? Tooltip's width is <b>adjustable</b>",
						"position"	: "T"
					},
					{
						"screenNumber" 		: 1,
						"bgcolor"	: "black",
						"name"		: "scroll",
						"showAsIntro"	: false,
						"posX"		: 550,
						"posY"		: 1170,
						"tooltipWidth" : 500,
						"text"		: "It's 2011, <b>animated scrolling</b> if tooltip is out of viewport. Next.",
						"position"	: "B"
					},
					{
						"screenNumber" 		: 1,
						"bgcolor"	: "white",
						"name"		: "footer",
						"showAsIntro"	: false,
						"posX"		: 550,
						"posY"		: 1320,
						"tooltipWidth" : 500,
						"text"		: "Dark in here... so tooltip's <b>background</b> is adjustable, too",
						"position"	: "T"
					},
					{
						"screenNumber" 		: 1,
						"bgcolor"	: "black",
						"name"		: "address",
						"showAsIntro"	: false,
						"posX"		: 300,
						"posY"		: 8,
						"tooltipWidth" : 700,
						"text"		: "BTW... did you see that the URL is changing? Yeah, <b>bookmarking, deep linking and browser history navigating</b>. Of course. Try it.",
						"position"	: "T"
					},
{
						"screenNumber" 		: 1,
						"bgcolor"	: "black",
						"name"		: "intro2",
						"showAsIntro"	: true,
						"posX"		: 300,
						"posY"		: 5,
						"tooltipWidth" : 700,
						"text"		: "Kinda boring showing only <b>one</b> layout. Of course you can include multiple screens. Let's take a look...",
						"position"	: "T"
					},
					{
						"screenNumber" 		: 2,
						"bgcolor"	: "black",
						"showAsIntro"	: false,
						"name"		: "layout2",
						"posX"		: 630,
						"posY"		: 270,
						"tooltipWidth" : 150,
						"text"		: "Here we are, another layout. You can switch between them as you like",
						"position"	: "B"
					},
					{
						"screenNumber" 		: 1,
						"bgcolor"	: "black",
						"name"		: "backtolayout1",
						"showAsIntro"	: false,
						"posX"		: 250,
						"posY"		: 250,
						"tooltipWidth" : 240,
						"text"		: "Yes, nice fade effect.",
						"position"	: "R"
					},
					{
						"screenNumber" 		: 3,
						"name"		: "blackone",
						"posX"		: 100,
						"posY"		: 1170,
						"showAsIntro"	: false,
						"tooltipWidth" : 300,
						"bgcolor"	: "white",
						"text"		: "Combined screen change and scroll to new tooltip. Works.",
						"position"	: "B"
					},
					{
						"screenNumber" 		: 3,
						"name"		: "blackone2",
						"posX"		: 30,
						"posY"		: 390,
						"showAsIntro"	: false,
						"tooltipWidth" : 250,
						"bgcolor"	: "white",
						"text"		: "Did you click the feedback button? Remember, it is <b>only a layout</b>, so there is nothing to click",
						"position"	: "L"
					},
					{
						"screenNumber" 		: 1,
						"posX"		: 400,
						"name"		: "ende",
						"posY"		: 990,
						"showAsIntro"	: true,
						"tooltipWidth" : 630,
						"bgcolor"	: "white",
						"text"		: "Thank you. Over and out.",
						"position"	: "B"
					}
				],
				previousStep = false,
				step = 0,
				total_steps	= config.length;		
				$("#inner").css({
					"margin-left": "-" + gridWidth / 2 + "px"
				}).width(gridWidth);
				var screenWidth = $("#wrapper").children("img").width()
				,screenHeight = $("#wrapper").children("img").height()
				,screens = $("#wrapper img");

				$("#wrapper img").css({
					"margin-left": "-" + (screenWidth / 2) + "px"
				})
				$("#wrapper,#inner").height(screenHeight);
				if(config[step].showAsIntro == true) showOverlay(1,config[step].text);
				showControls();
				$.address.init(function(event) {
					$.address.strict(false);
                });
				$.address.externalChange(function(event){
					var anchor=window.location.hash.substring(1);
					if(anchor!=""){
						for(var stepnumber=0; stepnumber <= total_steps - 1; stepnumber++){
							if(config[stepnumber].name == anchor) step = stepnumber;
						}
					}
					showScreens(true);
					gotoStep(step);
				})
				$('#canceltour').live('click',endTour);
				$('#endtour').live('click',endTour);
				$('#restarttour').live('click',restartTour);
				$('#nextstep').click(function(event){
					previousStep = false
					event.preventDefault();
					$.address.value(config[step+1].name);
					lastStep = step;
					step++;
					showScreens(false);
					gotoStep(step);				
				});
				$('#prevstep').click(function(event){
					previousStep = true
					event.preventDefault();
					$.address.value(config[step-1].name);
					lastStep = step;
					step--;
					showScreens(false);
					gotoStep(step);
				});
				
				function gotoStep(newstep){
					if(step>0)
					{
						$('#prevstep').show();
						$('#prevstep').attr("href","#" + config[step-1].name);
					}
					else
						$('#prevstep').hide();
					if(step == total_steps - 1)
						$('#nextstep').hide();
					else
					{
						$('#nextstep').show();
						$('#nextstep').attr("href","#" + config[step+1].name);						
					}
					showTooltip();				
				}
		
				function endTour(){
					step = 0;
					removeTooltip();
					hideControls();
				}
				
				function restartTour(){
					step = 0;
					gotoStep(step);
				}
				function showScreens(initial){
					//console.log(initial + " | " + step  + " | " + $(screens)  + " | " + lastStep)
					if(step>0)
						var previous_step_config = config[step-1];
					if(step<total_steps - 1)
						var next_step_config = config[step+1];
					var step_config = config[step];
					if(initial==false){
						if(step > 0){
							if(step_config.screenNumber  != previous_step_config.screenNumber && previousStep != true)
							{
								$(screens[step_config.screenNumber - 1]).fadeIn(500, function(){
									$(screens[previous_step_config.screenNumber - 1]).fadeOut(500).removeClass("active");
								}).addClass("active");
							}
						}
						if(step < total_steps - 1){
							if(step_config.screenNumber != next_step_config.screenNumber && previousStep == true)
							{	
								$(screens[step_config.screenNumber - 1]).fadeIn(500, function(){	
									$(screens[next_step_config.screenNumber - 1]).fadeOut(500).removeClass("active");
								}).addClass("active");		
							}
						}
					}
					else 
					{
								if($(screens[step_config.screenNumber - 1]).hasClass("active")){
									$("#wrapper img:not(.active)").fadeOut(1000).removeClass("active");
								} else {
									$("#wrapper img.active").fadeOut(1000).removeClass("active");
									$(screens[step_config.screenNumber - 1]).fadeIn(500).addClass("active");
								}
					
					}
				}
				function showTooltip(){
					removeTooltip();			
					hideOverlay();
					var step_config	= config[step];
						if(step_config.text != ""){
						var bgcolor 		= step_config.bgcolor;
						var color	 		= step_config.color;
						if(step_config.tooltipWidth!='') tooltipWidth = step_config.tooltipWidth;
						var $tooltip		= $('<div>',{
							id			: 'tour_tooltip',
							className 	: 'tooltip',
							html		: '<p>'+step_config.text+'</p><span class="tooltip_arrow"></span>'
						}).css({
							'display'			: 'none',
							'color'				: color
						}).width(tooltipWidth).height("auto");
						if(step_config.bgcolor=="white") $tooltip.addClass("white");
				
						//the css properties the tooltip should have
						var properties		= {};
						
						var tip_position 	= step_config.position;
						
						//append the tooltip but hide it
						$('#inner').prepend($tooltip);
						
						//get some info of the element
						var e_w				= 0;
						var e_h				= 0;
						var e_l				= step_config.posX;
						var e_t				= step_config.posY;
						var anitop = 0;
						var anileft = 0;
						
						switch(tip_position){
							case 'TL'	:
								properties = {
									'left'	: e_l,
									'top'	: e_t + e_h + 20 + 'px' 
								};
								$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_TL');
								anitop =  e_t + e_h + 'px' ;
								break;
							case 'TR'	:
								properties = {
									'left'	: e_l + e_w - $tooltip.width() + 'px',
									'top'	: e_t + e_h + 20 + 'px'
								};
								$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_TR');
								anitop = e_t + e_h + 'px' ;
								break;
							case 'BL'	:
								properties = {
									'left'	: e_l + 'px',
									'top'	: e_t - $tooltip.height() - 20 + 'px'
								};
								$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_BL');
								anitop = e_t - $tooltip.height() + 'px' ;
								break;
							case 'BR'	:
								properties = {
									'left'	: e_l + e_w - $tooltip.width() + 'px',
									'top'	: e_t - $tooltip.height() -20 + 'px'
								};
								$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_BR');
								anitop = e_t - $tooltip.height() + 'px' ;
								break;
							case 'LT'	:
								properties = {
									'left'	: e_l + e_w -20 + 'px',
									'top'	: e_t + 'px'
								};
								$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_LT');
								anileft =  e_l + e_w + 'px' ;
								break;
							case 'LB'	:
								properties = {
									'left'	: e_l + e_w -20 + 'px',
									'top'	: e_t + e_h - $tooltip.height() + 'px'
								};
								$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_LB');
								anileft = e_l + e_w + 'px' ;
								break;
							case 'RT'	:
								properties = {
									'left'	: e_l - $tooltip.width()  + 20 + 'px',
									'top'	: e_t + 'px'
								};
								$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_RT');
								anileft = e_l - $tooltip.width() + 'px' ;
								break;
							case 'RB'	:
								properties = {
									'left'	: e_l - $tooltip.width() + 20 + 'px',
									'top'	: e_t + e_h - $tooltip.height() + 'px'
								};
								$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_RB');
								anileft = e_l - $tooltip.width() + 'px' ;
								break;
							case 'T'	:
								properties = {
									'left'	: e_l + e_w/2 - $tooltip.width()/2 + 'px',
									'top'	: e_t + e_h + 20 + 'px'
								};
								$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_T');
								anitop = e_t + e_h + 'px' ;
								break;
							case 'R'	:
								properties = {
									'left'	: e_l - $tooltip.width() - 20 + 'px',
									'top'	: e_t + e_h/2 - $tooltip.height()/2 + 'px'
								};
								$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_R');
								anileft =  e_l - $tooltip.width() + 'px' ;
								break;
							case 'B'	:
								properties = {
									'left'	: e_l + e_w/2 - $tooltip.width()/2 + 'px',
									'top'	: e_t - $tooltip.height() - 20 + 'px'
								};
								anitop = e_t - $tooltip.height() + 'px' ;
								$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_B');
								break;
							case 'L'	:
								properties = {
									'left'	: e_l + e_w  + 20 +'px',
									'top'	: e_t + e_h/2 - $tooltip.height()/2 + 'px'
								};
								$tooltip.find('span.tooltip_arrow').addClass('tooltip_arrow_L');
								anileft = e_l + e_w + 'px' ;
								break;
							properties += {
								'display': 'block',
								'opacity': 0
							}
						}
						
						var w_t	= $(window).scrollTop();
						var w_b = $(window).scrollTop() + $(window).height();
						var b_t = parseFloat(properties.top,10);
						
						if(e_t < b_t)
							b_t = e_t;
						
						var b_b = parseFloat(properties.top,10) + $tooltip.height();
						if((e_t + e_h) > b_b)
							b_b = e_t + e_h;
						if((b_t < w_t || b_t > w_b) || (b_b < w_t || b_b > w_b - 200)){
							$('html, body').stop()
							.animate({scrollTop: b_t - 100}, 500, 'easeInOutExpo', function(){
								if(step_config.showAsIntro!=true){
									if(anitop==0) anitop = properties.top;
									if(anileft==0) anileft = properties.left;
									if(step_config.bgcolor=="white") $tooltip.addClass("white");
									$tooltip.css(properties).css({
										"display":"block",
										"opacity": 0
									}).animate({
										"top" : anitop,
										"left" : anileft,
										"opacity": 1
									}, 500);
								}
							});
						}
						else
							if(step_config.showAsIntro!=true){
							if(anitop==0) anitop = properties.top;
							if(anileft==0) anileft = properties.left;
							$tooltip.css(properties).css({
								"display":"block",
								"opacity": 0
							}).animate({
								"top" : anitop,
								"left" : anileft,
								"opacity": 1
							}, 500);
							}
						}
						if(step_config.showAsIntro==true){
						{
							$('html, body').stop()
							.animate({scrollTop: 0}, 500, 'easeInOutExpo');
							showOverlay(0,step_config.text);
						}
					}
				}
				
				function removeTooltip(){
					$('#tour_tooltip').fadeOut('fast', function(){
						$(this).remove();
					});
				}
				
				function showControls(){
					var $tourcontrols  = '<div id="tourcontrols" class="tourcontrols">';
						$tourcontrols += '<div class="nav"><a class="button" id="prevstep" style="display:none;"></a>';
						$tourcontrols += '<a class="button" id="nextstep" style="display:none;"></a></div>';
						//$tourcontrols += '<div class="nav"><a id="restarttour" style="display:none;">[Neustart]</span>';
						//$tourcontrols += '<a id="endtour" style="display:none;">[Beenden]</a></div>';
						$tourcontrols += '</div>';
					
					$('body').prepend($tourcontrols);
					$('#tourcontrols').animate({'bottom':'0px'},500);
				}
				
				function hideControls(){
					$('#tourcontrols').remove();
				}
				
				function showOverlay(now,text){
					var overlay	= '<div id="tour_overlay" class="overlay"></div>';
					$('body').prepend(overlay);
					if(config[step].bgcolor=="white") $("#tour_overlay").addClass("white");
					$("#tour_overlay").css("display","none").fadeIn(700);
					var introText = '<p id="introtext">' + text + '</p>';
					$("#inner").prepend(introText);
					innerWidth = $("#inner").width() / 10 * 7;
					$("#introtext").css({
						"top"	: $(window).height() * 0.5						
					}).width(innerWidth);
					var introtextHeight = $("#introtext").height();
					if(config[step].bgcolor=="white") $("#introtext").addClass("white");
					$("#introtext").css({
						"margin-top" : "-" + introtextHeight / 2 + "px",
						"margin-left" : "-" + ($("#introtext").width() / 2) + "px"
					});
				}
				
				function hideOverlay(){
					$('#tour_overlay,#introtext').fadeOut(700, function(){
						$(this).remove();
					});
				}
				
			});
$(document).ready(function(){

})
$(window).load(function(){
	$("#wrapper img").eq(0).fadeIn(1500);
})