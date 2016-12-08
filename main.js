$(document).ready(function() {

	var Se = ["s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.jpg", "s6.jpg"],
		Eg = ["e1.jpg", "e2.jpg", "e3.jpg", "e4.jpg"],
		Zr = ["z1.jpg", "z2.jpg", "z3.jpg", "z4.jpg"];

	var addD = function() {
		$(".con").attr('disabled', "");
		$(".con").removeAttr('href');
	};

	var remD = function() {
		$(".con").attr('href', "javascript:");
		$(".con").removeAttr('disabled');
	};

	var getRand = function(min, max, cs) {
		switch (cs) {
			case 1:
				return Math.floor(Math.random() * (max - min) + min);
				break;
			case 2: 
				return Math.random() * (max - min) + min;
				break;
		}
	};

	var st = {
			se1: Se[getRand(0, 6, 1)],
			se2: Se[getRand(0, 6, 1)],
			se3: Se[getRand(0, 6, 1)]},
		et = {
			es1: Eg[getRand(0, 3, 1)],
			es2: Eg[getRand(0, 3, 1)],
			es3: Eg[getRand(0, 3, 1)]},
		zt = {
			zs1: Zr[getRand(0, 3, 1)],
			zs2: Zr[getRand(0, 3, 1)],
			zs3: Zr[getRand(0, 3, 1)]},
		pg = 0;

	function getImg(step1, step2) {
		$("#1stph").css("background-image", "url(img/" + step1);
		$("#2ndph").css("background-image", "url(img/" + step2);
	}

	var opac0 = function(cs) {
		switch (cs) {
			case 0:
				$(".cont").css("opacity", "0");
				setTimeout(function() {
					$(".cont").css("display", "none");
				}, 300);
				break;

			case 1:
				$(".main").css("opacity", "0");
				break;
		}
	};

	var opac1 = function(sc) {
		switch (sc) {
		case 0:
			$(".main").css("display", "block");
			setTimeout(function() {
				$(".main").css("opacity", "1");
				clr1();
				clr2();
			}, 600);
			break;
		case 1:
			$(".end").css("display", "block");
			setTimeout(function() {
				$(".end").css("opacity", "1");
			}, 600);
		};
	};

	$(".beg").click(function() {
		opac0(0);

		addD();

		while (st.se1 == st.se2 || st.se1 == st.se3 || st.se2 == st.se3) {
			st.se2 = Se[getRand(0, 6, 1)];
			st.se3 = Se[getRand(0, 6, 1)];
		};

		while (et.es1 == et.es2 || et.es1 == et.es3 || et.es2 == et.es3 || et.es2 == undefined || et.es3 == undefined) {
			et.es2 = Eg[getRand(0, 3, 1)];
			et.es3 = Eg[getRand(0, 3, 1)];
		};

		while (zt.zs1 == zt.zs2 || zt.zs1 == zt.zs3 || zt.zs2 == zt.zs3 || zt.zs2 == undefined || zt.zs3 == undefined) {
			zt.zs2 = Zr[getRand(0, 3, 1)];
			zt.zs3 = Zr[getRand(0, 3, 1)];
		};

		getImg(st.se1, et.es1);

		opac1(0);

		pg++;
	});

	$(".rad").change(function() {
		remD();
	});

	$(".rad:first-child").on("click", function() {
		$("#1stph").css("box-shadow", "0px 0px 30px 0px #4caf50, inset 0px 0px 10px 0px rgba(0, 0, 0, 0.75)");
		clr2();
		remD();
	});

	$(".rad:last").on("click", function() {
		clr1();
		$("#2ndph").css("box-shadow", "0px 0px 30px 4px #4caf50, inset 0px 0px 10px 0px rgba(0, 0, 0, 0.75)");
		remD();
	});

	var clr2 = function() {
		$("#2ndph").css("box-shadow", "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.75), 0 1px 7px rgba(0, 0, 0, 0.52)");
	}

	var clr1 = function() {
		$("#1stph").css("box-shadow", "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.75), 0 1px 7px rgba(0, 0, 0, 0.52)");
	}

	$(".con").click(function() {

		if (!$(".con").attr("disabled")) {

			opac0(1);

			addD();

			switch (pg) {
				case 1:
					setTimeout(function() {

						getImg(et.es2, zt.zs1);
						$(".main h2").text("Хто з них, на вашу думку, є гомосексуалістом?");

					}, 600);

					opac1(0);
					break;
				case 2:
					setTimeout(function() {

						getImg(zt.zs2, st.se2);
						$(".main h2").text("Кому з них ви з запросто засадили б?");

					}, 600);

					opac1(0);
					break;
				case 3:
					opac1(1);
					$(".main").css("display", "none");

					var perc = getRand(0, 9, 2);

					$(".perc").text(perc.toString().slice(0, 4).replace(".", ","));

					if (perc < 5) {
						$(".h3 .ov").text("процента!");
					}

					$("h1").text("Ви успішно пройшли тест!");

					break;
			}

			pg++;
		}

	});

});