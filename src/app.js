(function(jQuery, mbrApp) {
    mbrApp.regExtension({
        name: "witsec-language",
        events: {
            load: function() {
                var a = this;
                a.addFilter("publishHTML", function(b) {
					var c = a.projectSettings["witsec-language"] || "";

					if (c) {
						b = b.replace(/<html/i, '<html lang="' + c + '" ')
					}

					return b
				});
                a.addFilter("additionalPageSettings", function(b) {
					var c = a.projectSettings["witsec-language"] || "";
					return b + [
							'<hr />',
							'<div class="form-group row clearfix">',
							'  <label class="col-md-3 control-label" style="white-space:nowrap">Site Language</label>',
							'  <div class="col-md-8 witsec-language-select">',
							'    <select name="witsec-language">',
							'      <option value="">Not set</option>',
							'      <option value="ab">Abkhazian</option>',
							'      <option value="aa">Afar</option>',
							'      <option value="af">Afrikaans</option>',
							'      <option value="ak">Akan</option>',
							'      <option value="sq">Albanian</option>',
							'      <option value="am">Amharic</option>',
							'      <option value="ar">Arabic</option>',
							'      <option value="an">Aragonese</option>',
							'      <option value="hy">Armenian</option>',
							'      <option value="as">Assamese</option>',
							'      <option value="av">Avaric</option>',
							'      <option value="ae">Avestan</option>',
							'      <option value="ay">Aymara</option>',
							'      <option value="az">Azerbaijani</option>',
							'      <option value="bm">Bambara</option>',
							'      <option value="ba">Bashkir</option>',
							'      <option value="eu">Basque</option>',
							'      <option value="be">Belarusian</option>',
							'      <option value="bn">Bengali (Bangla)</option>',
							'      <option value="bh">Bihari</option>',
							'      <option value="bi">Bislama</option>',
							'      <option value="bs">Bosnian</option>',
							'      <option value="br">Breton</option>',
							'      <option value="bg">Bulgarian</option>',
							'      <option value="my">Burmese</option>',
							'      <option value="ca">Catalan</option>',
							'      <option value="ch">Chamorro</option>',
							'      <option value="ce">Chechen</option>',
							'      <option value="ny">Chichewa, Chewa, Nyanja</option>',
							'      <option value="zh">Chinese</option>',
							'      <option value="zh-Hans">Chinese (Simplified)</option>',
							'      <option value="zh-Hant">Chinese (Traditional)</option>',
							'      <option value="cv">Chuvash</option>',
							'      <option value="kw">Cornish</option>',
							'      <option value="co">Corsican</option>',
							'      <option value="cr">Cree</option>',
							'      <option value="hr">Croatian</option>',
							'      <option value="cs">Czech</option>',
							'      <option value="da">Danish</option>',
							'      <option value="dv">Divehi, Dhivehi, Maldivian</option>',
							'      <option value="nl">Dutch</option>',
							'      <option value="dz">Dzongkha</option>',
							'      <option value="en">English</option>',
							'      <option value="eo">Esperanto</option>',
							'      <option value="et">Estonian</option>',
							'      <option value="ee">Ewe</option>',
							'      <option value="fo">Faroese</option>',
							'      <option value="fj">Fijian</option>',
							'      <option value="fi">Finnish</option>',
							'      <option value="fr">French</option>',
							'      <option value="ff">Fula, Fulah, Pulaar, Pular</option>',
							'      <option value="gl">Galician</option>',
							'      <option value="gd">Gaelic (Scottish)</option>',
							'      <option value="gv">Gaelic (Manx)</option>',
							'      <option value="ka">Georgian</option>',
							'      <option value="de">German</option>',
							'      <option value="el">Greek</option>',
							'      <option value="kl">Greenlandic</option>',
							'      <option value="gn">Guarani</option>',
							'      <option value="gu">Gujarati</option>',
							'      <option value="ht">Haitian Creole</option>',
							'      <option value="ha">Hausa</option>',
							'      <option value="he">Hebrew</option>',
							'      <option value="hz">Herero</option>',
							'      <option value="hi">Hindi</option>',
							'      <option value="ho">Hiri Motu</option>',
							'      <option value="hu">Hungarian</option>',
							'      <option value="is">Icelandic</option>',
							'      <option value="io">Ido</option>',
							'      <option value="ig">Igbo</option>',
							'      <option value="id, in">Indonesian</option>',
							'      <option value="ia">Interlingua</option>',
							'      <option value="ie">Interlingue</option>',
							'      <option value="iu">Inuktitut</option>',
							'      <option value="ik">Inupiak</option>',
							'      <option value="ga">Irish</option>',
							'      <option value="it">Italian</option>',
							'      <option value="ja">Japanese</option>',
							'      <option value="jv">Javanese</option>',
							'      <option value="kl">Kalaallisut, Greenlandic</option>',
							'      <option value="kn">Kannada</option>',
							'      <option value="kr">Kanuri</option>',
							'      <option value="ks">Kashmiri</option>',
							'      <option value="kk">Kazakh</option>',
							'      <option value="km">Khmer</option>',
							'      <option value="ki">Kikuyu</option>',
							'      <option value="rw">Kinyarwanda (Rwanda)</option>',
							'      <option value="rn">Kirundi</option>',
							'      <option value="ky">Kyrgyz</option>',
							'      <option value="kv">Komi</option>',
							'      <option value="kg">Kongo</option>',
							'      <option value="ko">Korean</option>',
							'      <option value="ku">Kurdish</option>',
							'      <option value="kj">Kwanyama</option>',
							'      <option value="lo">Lao</option>',
							'      <option value="la">Latin</option>',
							'      <option value="lv">Latvian (Lettish)</option>',
							'      <option value="li">Limburgish ( Limburger)</option>',
							'      <option value="ln">Lingala</option>',
							'      <option value="lt">Lithuanian</option>',
							'      <option value="lu">Luga-Katanga</option>',
							'      <option value="lg">Luganda, Ganda</option>',
							'      <option value="lb">Luxembourgish</option>',
							'      <option value="gv">Manx</option>',
							'      <option value="mk">Macedonian</option>',
							'      <option value="mg">Malagasy</option>',
							'      <option value="ms">Malay</option>',
							'      <option value="ml">Malayalam</option>',
							'      <option value="mt">Maltese</option>',
							'      <option value="mi">Maori</option>',
							'      <option value="mr">Marathi</option>',
							'      <option value="mh">Marshallese</option>',
							'      <option value="mo">Moldavian</option>',
							'      <option value="mn">Mongolian</option>',
							'      <option value="na">Nauru</option>',
							'      <option value="nv">Navajo</option>',
							'      <option value="ng">Ndonga</option>',
							'      <option value="nd">Northern Ndebele</option>',
							'      <option value="ne">Nepali</option>',
							'      <option value="no">Norwegian</option>',
							'      <option value="nb">Norwegian bokmål</option>',
							'      <option value="nn">Norwegian nynorsk</option>',
							'      <option value="ii">Nuosu</option>',
							'      <option value="oc">Occitan</option>',
							'      <option value="oj">Ojibwe</option>',
							'      <option value="cu">Old Church Slavonic, Old Bulgarian</option>',
							'      <option value="or">Oriya</option>',
							'      <option value="om">Oromo (Afaan Oromo)</option>',
							'      <option value="os">Ossetian</option>',
							'      <option value="pi">Pāli</option>',
							'      <option value="ps">Pashto, Pushto</option>',
							'      <option value="fa">Persian (Farsi)</option>',
							'      <option value="pl">Polish</option>',
							'      <option value="pt">Portuguese</option>',
							'      <option value="pa">Punjabi (Eastern)</option>',
							'      <option value="qu">Quechua</option>',
							'      <option value="rm">Romansh</option>',
							'      <option value="ro">Romanian</option>',
							'      <option value="ru">Russian</option>',
							'      <option value="se">Sami</option>',
							'      <option value="sm">Samoan</option>',
							'      <option value="sg">Sango</option>',
							'      <option value="sa">Sanskrit</option>',
							'      <option value="sr">Serbian</option>',
							'      <option value="sh">Serbo-Croatian</option>',
							'      <option value="st">Sesotho</option>',
							'      <option value="tn">Setswana</option>',
							'      <option value="sn">Shona</option>',
							'      <option value="ii">Sichuan Yi</option>',
							'      <option value="sd">Sindhi</option>',
							'      <option value="si">Sinhalese</option>',
							'      <option value="ss">Siswati</option>',
							'      <option value="sk">Slovak</option>',
							'      <option value="sl">Slovenian</option>',
							'      <option value="so">Somali</option>',
							'      <option value="nr">Southern Ndebele</option>',
							'      <option value="es">Spanish</option>',
							'      <option value="su">Sundanese</option>',
							'      <option value="sw">Swahili (Kiswahili)</option>',
							'      <option value="ss">Swati</option>',
							'      <option value="sv">Swedish</option>',
							'      <option value="tl">Tagalog</option>',
							'      <option value="ty">Tahitian</option>',
							'      <option value="tg">Tajik</option>',
							'      <option value="ta">Tamil</option>',
							'      <option value="tt">Tatar</option>',
							'      <option value="te">Telugu</option>',
							'      <option value="th">Thai</option>',
							'      <option value="bo">Tibetan</option>',
							'      <option value="ti">Tigrinya</option>',
							'      <option value="to">Tonga</option>',
							'      <option value="ts">Tsonga</option>',
							'      <option value="tr">Turkish</option>',
							'      <option value="tk">Turkmen</option>',
							'      <option value="tw">Twi</option>',
							'      <option value="ug">Uyghur</option>',
							'      <option value="uk">Ukrainian</option>',
							'      <option value="ur">Urdu</option>',
							'      <option value="uz">Uzbek</option>',
							'      <option value="ve">Venda</option>',
							'      <option value="vi">Vietnamese</option>',
							'      <option value="vo">Volapük</option>',
							'      <option value="wa">Wallon</option>',
							'      <option value="cy">Welsh</option>',
							'      <option value="wo">Wolof</option>',
							'      <option value="fy">Western Frisian</option>',
							'      <option value="xh">Xhosa</option>',
							'      <option value="yi, ji">Yiddish</option>',
							'      <option value="yo">Yoruba</option>',
							'      <option value="za">Zhuang, Chuang</option>',
							'      <option value="zu">Zulu</option>',
							'    </select>',
							'  </div>',
							'  <div class="col-md-1" style="font-size:10px" data-toggle="tooltip" data-placement="top" title="Specify the language of your website.">witsec&nbsp;</div>',
							'</div>',
							'<script>',
							'$("div.witsec-language-select select").val("' + c + '");',
							'</script>'
							].join("")
                })
            }
        }
    })
})(jQuery, mbrApp);