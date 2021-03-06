/*JS TOPE-LÀ*/ 
(function (blink) {
	'use strict';

	var topelaStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	topelaStyle.prototype = {
		//BK-15873 añadimos el estilo basic como parent para la herencia de los estilos del CKEditor
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_topela',
		ckEditorStyles: {
			name: 'topela',
			styles: [
				{ name: 'T.Intro', element: 'h2', attributes: { 'class': 'bck-title-intro'} },
				{ name: 'T.Intro Rojo', element: 'h2', attributes: { 'class': 'bck-title-2'} },
				{ name: 'T.Intro Verde', element: 'h2', attributes: { 'class': 'bck-title-3'} },
				{ name: 'T.Intro Morado', element: 'h2', attributes: { 'class': 'bck-title-4'} },
				{ name: 'T.Azul', element: 'h2', attributes: { 'class': 'bck-title-1'} },
				{ name: 'T.Rojo', element: 'h2', attributes: { 'class': 'bck-title-5'} },
				{ name: 'T.Verde', element: 'h2', attributes: { 'class': 'bck-title-6'} },
				{ name: 'T.Morado', element: 'h2', attributes: { 'class': 'bck-title-7'} },
				{ name: 'Título negro', element: 'h2', attributes: { 'class': 'bck-title-12'} },
				
				{ name: 'Billy', element: 'span', attributes: { 'class': 'bck-enfasis-1'} },
				{ name: 'Énfasis enunciado', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },
				{ name: 'Color Verde', element: 'span', attributes: { 'class': 'bck-enfasis-3'} },
				{ name: 'Color Morado', element: 'span', attributes: { 'class': 'bck-enfasis-4'} },
				{ name: 'Color rojo', element: 'span', attributes: { 'class': 'bck-enfasis-5'} },
				{ name: 'Color azul', element: 'span', attributes: { 'class': 'bck-enfasis-6'} },
				{ name: 'Énfasis num. Lesson', element: 'span', attributes: { 'class': 'bck-enfasis-7'} },
				{ name: 'Boc.Izq.Az', element: 'span', attributes: { 'class': 'bck-enfasis-8'} },
				{ name: 'Boc.Izq.Roj', element: 'span', attributes: { 'class': 'bck-enfasis-9'} },
				{ name: 'Boc.Izq.Verde', element: 'span', attributes: { 'class': 'bck-enfasis-10'} },
				{ name: 'Boc.Izq.Mor', element: 'span', attributes: { 'class': 'bck-enfasis-11'} },
				{ name: 'Boc.Der.Az', element: 'span', attributes: { 'class': 'bck-enfasis-12'} },
				{ name: 'Boc.Der.Roj', element: 'span', attributes: { 'class': 'bck-enfasis-13'} },
				{ name: 'Boc.Der.Verde', element: 'span', attributes: { 'class': 'bck-enfasis-14'} },
				{ name: 'Boc.Der.Mor', element: 'span', attributes: { 'class': 'bck-enfasis-15'} },

				{ name: 'L.Des. Azul', element: 'ul', attributes: { 'class': 'bck-ul-1'} },
				{ name: 'L.Des. Roja', element: 'ul', attributes: { 'class': 'bck-ul-2'} },
				{ name: 'L.Des. Verde', element: 'ul', attributes: { 'class': 'bck-ul-3'} },
				{ name: 'L.Des. Morada', element: 'ul', attributes: { 'class': 'bck-ul-4'} },
				{ name: 'L.Des. Blanca', element: 'ul', attributes: { 'class': 'bck-ul-5'} },

				{ name: 'L.123 Blanca', element: 'ol', attributes: { 'class': 'bck-ol-1' } },
				{ name: 'L.123 Roja', element: 'ol', attributes: { 'class': 'bck-ol-2' } },
				{ name: 'L.123 Azul', element: 'ol', attributes: { 'class': 'bck-ol-3' } },
				{ name: 'Lista abc Azul', element: 'ol', attributes: { 'class': 'bck-ol-4' } },
				{ name: 'L.abc negra', element: 'ol', attributes: { 'class': 'bck-ol-5' } },
				{ name: 'L.abc Grid negra', element: 'ol', attributes: { 'class': 'bck-ol-6' } },
				{ name: 'L.123 Circulo', element: 'ol', attributes: { 'class': 'bck-ol-7' } },
				{ name: 'L.123 Verde', element: 'ol', attributes: { 'class': 'bck-ol-8' } },
				{ name: 'L.123 Morado', element: 'ol', attributes: { 'class': 'bck-ol-9' } },
				{ name: 'L.abc Verde', element: 'ol', attributes: { 'class': 'bck-ol-10' } },
				{ name: 'L.abc Morado', element: 'ol', attributes: { 'class': 'bck-ol-11' } },
				{ name: 'L.abc Rojo', element: 'ol', attributes: { 'class': 'bck-ol-12' } },
										
				{ name: 'CajaEntracte', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-1' } },
				{ name: 'Caja BlancaLivre', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-2' } },
				{ name: 'Caja BlancaCahier', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-3' } },
				{ name: 'Caja CajaInsertar', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-4' } },
				{ name: 'Caja Verde', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-5' } },
				{ name: 'Caja Blanca Rectangulo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-6' } },
				{ name: 'Caja Círculo azul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-7' } },
				{ name: 'Caja Bordes amarillos', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-8' } },
				{ name: 'Caja Azul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-9' } },
				{ name: 'Caja Diag.Izq', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-10' } },
				{ name: 'Caja Diag.Der', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-11' } },
				{ name: 'Caja Bocadillo Info', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-12' } },
				{ name: 'Caja Azul Básica', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-13' } },
				{ name: 'Caja Blanca Básica', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-14' } },

				{ name: 'Tabla Azul', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-2'} },
				
				{ name: 'Celda Azul', element: 'td', attributes: { 'class': 'bck-td-2'} },
				
				{ name: 'Icono Hablar', element: 'span', attributes: { 'class': 'icon icon-hablar' } },
				{ name: 'Icono Audio', element: 'span', attributes: { 'class': 'icon icon-audio' } },
				{ name: 'Icono Libro', element: 'span', attributes: { 'class': 'icon icon-libro' } },
				{ name: 'Icono Cuidado', element: 'span', attributes: { 'class': 'icon icon-cuidado' } },
				{ name: 'Icono Lápiz', element: 'span', attributes: { 'class': 'icon icon-lapizrojo' } },
				{ name: 'Icono Colores', element: 'span', attributes: { 'class': 'icon icon-colores' } }

			]
		},
		slidesTitle: {},
		subunits: [],
		totalSlides: 0,

		init: function (scope) {
			var that = scope || this;
			this.parent.init.call(that);
			that.addActivityTitle();
			if(window.esWeb) return;
			that.fillSlidesTitle();
			that.getActualUnitActivities();
			blink.events.on("course_loaded", function(){
				that.formatCarouselindicators();
				that.enableSliders();
			});
			that.animateNavbarOnScroll();
			that.initDropdown();
			that.addSlideNavigators();
		},
		removeFinalSlide: function () {
			if (blink.isIosApp && blink.activity.level != 6) {
				var parent = blink.theme.styles.basic.prototype;
				parent.removeFinalSlide.call(this, true);
			}
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return blink.courseInfo.unit + ' > ' + $(this).html();
			})
		},

		fillSlidesTitle: function () {
			var self = this.slidesTitle;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = window['t'+index+'_slide'];
				var slideTitle = slide.title;
				slideTitle = slideTitle.replace(/<span class="index">\s*([\d]+)\s*<\/span>/i, '$1. ');
				slideTitle = slideTitle.replace(/\s+/, ' ');
				slideTitle = stripHTML(slideTitle);

				self['t'+index+'_slide'] = slideTitle;
			}
		},

		/**
		 * @summary Gets the activity type subunits of the actual unit.
		 * @return {Object} Object of the actual unit filtering the not activity type subunits
		 */
		getActualUnitActivities: function () {
			var curso = blink.getCourse(idcurso),
				that = this,
				units,
				unitSubunits,
				actualActivity,
				tmpActualActivity = '',
				tmpActivity = '',
				nextActivity = '',
				previousActivity = '',
				unitActivities = [];

			curso.done(function () {
				units = curso.responseJSON.units;

				$.each(units, function () {
					if (this.id && this.id == blink.courseInfo.IDUnit) {
						unitSubunits = this.subunits.concat(this.resources);
					}

					$.each(this.subunits, function () {
						if(nextActivity === '' && tmpActualActivity !== '' && this.level != 6) {
							nextActivity = this;
						}
						if (idclase == this.id) {
							tmpActualActivity = this.title;
							if(tmpActivity && tmpActivity.level != 6) {
								previousActivity = tmpActivity;
							}
						}
						tmpActivity = this;
					});
				});

				actualActivity = _.find(unitSubunits, function(subunit) {
					return subunit.id == idclase;
				});

				if (typeof actualActivity !== "undefined" && actualActivity.level == '6') {
					unitActivities.push(actualActivity);
				} else {
					unitActivities = _.filter(unitSubunits, function(subunit) {
						return subunit.type == 'actividad' && subunit.level !== '6';
					});
				}

				that.subunits = unitActivities;

				if(nextActivity !== '' || previousActivity !== '') {
					that.createListenerForSwipeBetweenActivities(nextActivity, previousActivity);
				}
			}).done(function(){
				blink.events.trigger('course_loaded');
			});
		},

		createListenerForSwipeBetweenActivities: function(nextActivity, previousActivity) {
			var that = this;

			if(nextActivity !== '' && typeof nextActivity.url !== 'undefined') {
				document.addEventListener('swipe:last:nextActivity', function(e) {
					redireccionar(nextActivity.url);
				}, false);
			}

			if(previousActivity !== '' && typeof previousActivity.url !== 'undefined') {
				document.addEventListener('swipe:first:previousActivity', function(e) {
					redireccionar(previousActivity.url);
				}, false);
			}
		},

		/**
		 * @summary Getting active slide position in relation with the total of the
		 *          unit slides.
		 * @param {Array} $subunits Array of activity type objects
		 * @return {int} Slide position
		 */
		getActualSlideNumber: function (subunits) {
			var actualSlideIndex = $('.swipeview-active').attr('data-page-index'),
				actualSlide = 1;

			for (var i in subunits) {
				if (subunits[i].id && parseInt(subunits[i].id) != idclase) {
					actualSlide += parseInt(subunits[i].pags);
				} else {
					actualSlide += parseInt(actualSlideIndex);
					break;
				}
			}

			return actualSlide;
		},

		formatCarouselindicators: function (scope, classNavbar) {
			var that = scope || this,
				navbar = ((typeof classNavbar !== "undefined" && classNavbar)?classNavbar:'topela-navbar'),
				$navbarBottom = $('.navbar-bottom'),
				firstSlide = eval('t0_slide');
			if(blink.courseInfo && blink.courseInfo.courseDateCreated) var courseYearCreated = new Date(blink.courseInfo.courseDateCreated).getFullYear();
			var yearCopy = courseYearCreated !== undefined ? courseYearCreated : 2016;
			$navbarBottom
				.attr('class', navbar)
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before('<span class="copyright">&copy;' +  yearCopy + '</span>')
					.wrap('<div id="top-navigator"/>')
					.remove()
					.end();

			$('#volverAlIndice').click(function() {
				return showCursoCommit();
			});

			var subunits = that.subunits,
				totalSlides = 0,
				subunit_index,
				subunit_pags;

			// Different behaviour depending on whether the slides are accessed from
			// a book or from a homework link or similar
			if (subunits.length !== 0) {
				for (var i in subunits) {
					if (subunits[i].pags) {
						var subunitSlides = parseInt(subunits[i].pags);
						totalSlides += subunitSlides;
					}
					if (subunits[i].id && subunits[i].id == idclase) {
						subunit_index = i;
						subunit_pags = parseInt(subunits[i].pags);
					}
				}

				that.totalSlides = totalSlides;

				$('#top-navigator').append('<span class="left slider-navigator">' +
						'<span class="fa fa-chevron-left"></span>' +
					'</span>' +
					'<span class="slide-counter" data-subunit-index="' + subunit_index +
						'" data-subunit-pags="' + subunit_pags + '">' +
						that.getActualSlideNumber(subunits) + ' / ' + totalSlides +
					'</span>' +
					'<span class="right slider-navigator">' +
						'<span class="fa fa-chevron-right"></span>' +
					'</span>');

				blink.events.on('section:shown', function() {
					$('.slide-counter').html(that.getActualSlideNumber(subunits) +
						' / ' + totalSlides);
				});
			} else {
				$('#top-navigator').append('<span class="left slider-navigator">' +
						'<span class="fa fa-chevron-left"></span>' +
					'</span>' +
					'<span class="slide-counter">' + (window.activeSlide + 1) +
						' / ' + window.secuencia.length +
					'</span>' +
					'<span class="right slider-navigator">' +
						'<span class="fa fa-chevron-right"></span>' +
					'</span>');

				blink.events.on('section:shown', function() {
					$('.slide-counter').html((window.activeSlide + 1) +
						' / ' + window.secuencia.length);
					$('.bck-dropdown-2').hideBlink();
				});
			}

			blink.events.on('section:shown', function() {
				var sectionTitle = eval('t' + blink.activity.getFirstSlideIndex(window.activeSlide) +
					'_slide').title;
				$navbarBottom.find('.sectionTitle').text(sectionTitle);
			});

			if (firstSlide.seccion) {
				$navbarBottom.addClass('first-is-section');
			}

			blink.events.trigger(true, 'style:endFormatCarousel');
		},

		addSlideNavigators: function () {
			var that = this;

			blink.events.on("course_loaded", function(){
				var that = blink.activity.currentStyle,
					subunit_index = parseInt($('.slide-counter').attr('data-subunit-index')),
					level_six = that.subunits.length == 1 && that.subunits[0].level == 6;

				$('.slider-control').off('click');
				// Navigation change depending on whether the slides are accessed from
				// a book or from a homework link or similar
				if (that.subunits.length !== 0 && !level_six) {
					// Slider controls must allow navigation among all the activity subunits
					// in the current unit.
					var idgrupo = window.idgrupo,
						idalumno = window.idalumno,
						slideNavParams = '';

					if (idgrupo) slideNavParams += '&idgrupo=' + idgrupo;
					if (idalumno) slideNavParams += '&idalumno=' + idalumno;

					$('.left.slider-control, .left.slider-navigator').click(function () {

						if (!$(this).hasClass('disabled')) {
							if(activeSlide == 0) {
								// BK-19843 audio stop when slider changes.
								if (blink.isApp) {
									blink.rest.closeAudio();
								}
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index - 1].id + '&modo='+ modoVisualizacion + '&numSec=' +
									that.subunits[subunit_index - 1].numSlides + slideNavParams, false, undefined);
							} else {
								blink.activity.showPrevSection();
							}
						}
					});

					$('.right.slider-control, .right.slider-navigator').click(function () {
						if (!$(this).hasClass('disabled')) {
							if(activeSlide == parseInt(that.subunits[subunit_index].pags) - 1) {
								// BK-19843 audio stop when slider changes.
								if (blink.isApp) {
									blink.rest.closeAudio();
								}
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index + 1].id + '&modo='+ modoVisualizacion +
									((typeof window.esPopup !== "undefined" && window.esPopup)?"&popup=1":"")  + slideNavParams,
									false, undefined);
							} else {
								blink.activity.showNextSection();
							}
						}
					});

					document.addEventListener('swipe:first:previousActivity', function(e) {
						blink.activity.previousSlide(that.subunits, subunit_index);
					}, false);
					document.addEventListener('swipe:last:nextActivity', function(e) {
						blink.activity.nextSlide(that.subunits, subunit_index);
					}, false);
				} else {
					$('.left.slider-control, .left.slider-navigator').click(function () {
						blink.activity.showPrevSection();
					});
					$('.right.slider-control, .right.slider-navigator').click(function () {
						blink.activity.showNextSection();
					});
				}

				$(document).ready(function() {
					blink.events.on('showSlide:after', function() {
						that.enableSliders();
					});
				});
			});
		},
			/**
			 * @summary Enables all slider controls and disables when appropiate
			 */
			enableSliders: function () {
					// Removes disabled class to all navigation buttons and applies
				// just if its first or last slide of all activities
				$('.slider-control, .slider-navigator').removeClass('disabled');
				var that = blink.activity.currentStyle,
					subunit_index = parseInt($('.slide-counter').attr('data-subunit-index')),
					level_six = this.subunits.length == 1 && this.subunits[0].level == 6;
				// Navigation change depending on whether the slides are accessed from
				// a book or from a homework link or similar
				if (this.subunits.length !== 0 && modoVisualizacionLabel != "standalone") {
						if (this.getActualSlideNumber(this.subunits) == 1) {
							$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
					if (this.getActualSlideNumber(this.subunits) == this.totalSlides && !level_six) {
							$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			} else {
						if (window.activeSlide == 0) {
							$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
					if(window.activeSlide == parseInt(that.subunits[subunit_index].pags) - 1 && !level_six){
							$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			}
		},
		//BK-15873 Quitamos la funcion getEditorStyles para que herede de parent

		showBookIndexInClass: function () {
			return modoVisualizacionLabel != "standalone";

		},

		animateNavbarOnScroll: function (scope, classNavbar) {
			var that = scope || this,
				navbar = ((typeof classNavbar !== "undefined" && classNavbar)?classNavbar:'topela-navbar');
			if (!blink.isApp) return;
			var $navbar = $('.'+navbar);
			var lastScrollTop = 0;
			$('.js-slider-item').scroll(function () {
				var scrollTop = $(this).scrollTop();
				(scrollTop > lastScrollTop && scrollTop) ? $navbar.addClass('ocultar') : $navbar.removeClass('ocultar');
				lastScrollTop = scrollTop;
			});
		},

		initDropdown : function () {
			$(".bck-dropdown-button")
				.find('.fa').text('').end() //Eliminar el &nbsp;
				.toggle(
					function(){
						$(this).parent('.bck-dropdown')
							.addClass('open')
							.find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up').end()
							.find(".bck-dropdown-content").slideDown(300, function() {
								if($(this).parent('.bck-dropdown').hasClass('activities-dropdown')
									&& blink.activity.currentStyle.getActivePane()) {
									var actividad = $('.tab-pane.active').attr('id');
									var index = actividad.split('-').pop();
									var slide = window['t' + index + '_slide'];
									slide.onAfterShowSlide();
								}
							});

					},
					function(){
						$(this).parent('.bck-dropdown')
							.removeClass('open')
							.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down').end()
							.find(".bck-dropdown-content").slideUp(300);
					}
				);
		},

		// Busca la id de la última slide de un dropdown con la que se ha interactuado y
		// guarda en el suspend data.
		// @param {string} activePane 	Id del panel en el que se encuentra la slide
		setActivePane : function (activePane) {
			if (!!activePane && !!scormAPI) {
				var slideId = $(activePane).find('.class_slide').attr('data-id'),
					parentSlide = window['t' + window.activeSlide + '_slide'];
				parentSlide.sublocation = slideId;
			}
		},

		// Mira a ver si se ha guardado alguna slide del dropdown en el suspend data y,
		// en caso de ser así, la pone como activa.
		getActivePane : function () {
			var currentSlide = window['t' + window.activeSlide + '_slide'];
			if (currentSlide.sublocation) {
				var activePane = $('.class_slide[data-id="' + currentSlide.sublocation + '"]')
								.closest('.tab-pane'),
					activeDropdown = $(activePane).closest('.bck-dropdown');
				$(activeDropdown)
					.find('a[href="#' + $(activePane).attr('id') + '"]')
					.first()
					.tab('show');
				return true;
			} else {
				return true;
			}
		},

		/**
		 * Devuelve el offsetTop del elemento que agrupa a las transparencia concatenada
		 *
		 * @param {object} myElement Div de la transparencia para buscar su contenedor
		 * @returns {Boolean}
		 */
		calculateTopOffsetSlide: function(myElement){
		    if(typeof myElement === "object"){
			    var dropdown = $(myElement).parents('.bck-dropdown');
			    if(dropdown.length>0 && typeof dropdown.offset === "function"){
				    dropdown.find('.bck-dropdown-button').click();
				    return dropdown.offset().top;
			    }
		    }
		    return false;
 		}
	};

	topelaStyle.prototype = _.extend({}, new blink.theme.styles.basic(), topelaStyle.prototype);

	blink.theme.styles['topela'] = topelaStyle;

})( blink );

$(document).ready(function() {

	if (!$('body').hasClass('edit')) {
		$(document).on('click', '.nav-tabs a', function() {
			var actividad = $(this).attr('href');
			var index = actividad.split('-').pop();
			var slide = window['t' + index + '_slide'];
			slide && slide.onAfterShowSlide();
		});
	}

	$(document).on('click', '.bck-dropdown .class_slide, .nav-tabs a', function(e){
		var activePane;
		if (!!$(e.target).closest('.nav-tabs').length) {
			activePane = $(e.target).attr('href');
		} else {
			activePane = '#' + $(e.target).closest('.tab-pane').attr('id');
		}
		blink.activity.currentStyle.setActivePane && blink.activity.currentStyle.setActivePane(activePane);
	});

});
