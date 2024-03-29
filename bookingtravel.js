<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8" />
        <title>Form Order WhatsApp</title>
        <style>
        * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -o-box-sizing: border-box;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        padding: 0;
    }
    #whatsapp {
        box-shadow: 0 20px 25px rgba(0,0,0,.05);
        width: 100%;
        font-family: Helvetica, sans-serif;
        font-size: 18px;
    }
        #whatsapp label,
        #whatsapp a {
            display: block;
            margin: 15px;
            text-decoration: none;
        }
        #whatsapp input,
        #whatsapp textarea {
            display: block;
            font-size: 18px;
            border: 1px solid #eee;
            box-shadow: inset 0 2px 5px #eee;
            width: 100%;
            padding: 15px;
            border-radius: 2px;
            width: 70%;
        }
            #whatsapp input.nama {
                text-transform: capitalize;
            }
            #whatsapp input:focus,
            #whatsapp textarea:focus {
                border: 1px solid #ddd;
            }
        #whatsapp textarea {
            min-height: 80px;
            resize: none;
        }
        #whatsapp a {
            cursor: pointer;
            display: block;
            padding: 10px;
            font-weight: bold;
            text-align: center;
            background: #25D366;
            color: white;
            border-radius: 2px;
            width: 70%;
        }
            #whatsapp a:hover {
                background: #288b4e;
            }
        </style>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>
        <div align="center" id="whatsapp">
            <input class="tujuan" type="hidden" id="noAdmin">
            <label>
                <input class="nama" type="text" placeholder="Nama Lengkap..">
            </label>
			<label>
                <input class="kecamatan" type="text" placeholder="Kecamatan..">
            </label>
            <label>
                <input class="nowhatsapp" type="number" placeholder="Nomor Whatsapp..">
            </label>
            <label>
                <input class="alamat" type="text" placeholder="Alamat Lengkap">
            </label>
            <a class="submit">Kirim ke WA Admin</a>
        </div>
        <script>
        //no wa admin
    $("#noAdmin").val("");
    $('.whatsapp-btn').click(function () {
        $('#whatsapp').toggleClass('toggle');
    });
    // Onclick Whatsapp Sent!
    $('#whatsapp .submit').click(WhatsApp);
    $("#whatsapp input, #whatsapp textarea").keypress(function () {
        if (event.which == 13) WhatsApp();
    });
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    function WhatsApp() {
        var ph = '';
        if ($('#whatsapp .nama').val() == '') { // Cek Nama
            ph = $('#whatsapp .nama').attr('placeholder');
            alert('Silahkan tulis ' + ph);
            $('#whatsapp .nama').focus();
            return false;
		} else if ($('#whatsapp .provinsi').val() == '') { // Cek Provinsi
            ph = $('#whatsapp .provinsi').attr('placeholder');
            alert('Silahkan tulis ' + ph);
            $('#whatsapp .nowhatsapp').focus();
            return false;		
        } else if ($('#whatsapp .nowhatsapp').val() == '') { // Cek Whatsapp
            ph = $('#whatsapp .nowhatsapp').attr('placeholder');
            alert('Silahkan tulis ' + ph);
            $('#whatsapp .nowhatsapp').focus();
            return false;
        } else if ($('#whatsapp .alamat').val() == '') { // Cek Alamat
            ph = $('#whatsapp .alamat').attr('placeholder');
            alert('Silahkan tulis ' + ph);
            $('#whatsapp .alamat').focus();
            return false;
        } else {
            // Check Device (Mobile/Desktop)
            var url_wa = 'https://api.whatsapp.com/send';
            if (/Android|webOS|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                url_wa = 'https://api.whatsapp.com/send';
            }
            // Get Value
            var tujuan = $('#whatsapp .tujuan').val(),
                via_url = location.href,
                nama = $('#whatsapp .nama').val(),
				provinsi = $ ('#whatsapp .provinsi').val(),
                nowhatsapp = $('#whatsapp .nowhatsapp').val(),
                alamat = $('#whatsapp .alamat').val();
            $(this).attr('href', url_wa + '?phone=0117515501'+ tujuan + '&text=Nama: ' + nama + ' %0ANo. Whatsapp: ' + provinsi +' %&text=provinsi:' + nowhatsapp + '%0AAlamat: ' + alamat + ' %0A%0Avia ' + via_url);
            var w = 960,
                h = 540,
                left = Number((screen.width / 2) - (w / 2)),
                tops = Number((screen.height / 2) - (h / 2)),
                popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
            popupWindow.focus();
            return false;
        }
    }
        </script>
    </body>
    </html>
