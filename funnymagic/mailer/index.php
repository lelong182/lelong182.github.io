<?php

$txt = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Payment</title>
    </head>
    <body>
        <div style="width:100%;background-color: #fff;border-bottom: 2px solid #c1c1c1;height: 5px;"></div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
            <tbody>
                <tr>
                    <td align="center" valign="top" style="padding:10px; background: #F9F9F9;">
                        <table border="0" cellpadding="0" cellspacing="0" width="800" style="border-collapse:collapse">
                            <tbody>
                                <tr>
                                    <td align="left" valign="top">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="300" style="border-collapse:collapse">
                                            <tbody>
                                                <tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" width="800" style="border-collapse:collapse">
                                            <tbody>
                                                <tr>
                                                    <td valign="top" style="padding-top:30px;padding-bottom:30px">
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="180" style="border-collapse:collapse">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="left" valign="top"><a href="#" target="_blank"> <img alt="img" src="logo" style="border:0;outline:none;text-decoration:none" /></a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" valign="top">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="800" style="background-color:#ffffff;border:1px solid #e5e5e5;border-bottom:3px solid #e5e5e5;border-collapse:separate;border-top-left-radius: 5px;border-top-right-radius: 5px;">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" valign="top" style="padding-top:10px;padding-right:15px;padding-bottom:15px;padding-left:15px">
                                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
                                                                            <tbody>
<tr>
    <td align="center" style="padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
            <tbody>
                <tr>
                    <td align="left" valign="top">
                        <h1 style="color:#27aee4;font-size: 18px;font-family: \'Segoe UI\', sans-serif;">
                            Thông tin nhận hàng
                        </h1>
                    </td>
                </tr>
                <tr>
                    <td valign="top" style="padding:10px 20px 0;color: #575757;line-height: 1.4;font-size: 14px;">
                        <table style="width: 100%;font-family: \'Segoe UI\', sans-serif;border-bottom: 3px solid #ddd;">
                            <tbody>
                                <tr>
                                    <td style="width:30%;padding: 8px 10px;background-color: #f9f9f9;border-top: 1px dashed #ddd;"><strong>Họ tên:</strong></td>
                                    <td style="padding: 8px 10px;border-top: 1px dashed #ddd;background-color: #f9f9f9;">
                                        '. $_POST['fullname'] . '
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 10px;border-top: 1px dashed #ddd;"><strong>Địa chỉ:</strong></td>
                                    <td style="padding: 8px 10px;border-top: 1px dashed #ddd;">
                                        ' . $_POST['address'] . '
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 10px;background-color: #f9f9f9;border-top: 1px dashed #ddd;"><strong>Số điện thoại:</strong></td>
                                    <td style="padding: 8px 10px;border-top: 1px dashed #ddd;background-color: #f9f9f9;">
                                        ' . $_POST['phone'] . '
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 10px;border-top: 1px dashed #ddd;"><strong>Email:</strong></td>
                                    <td style="padding: 8px 10px;border-top: 1px dashed #ddd;">
                                        ' . $_POST['email'] . '
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 10px;background-color: #f9f9f9;border-top: 1px dashed #ddd;"><strong>Số điện thoại:</strong></td>
                                    <td style="padding: 8px 10px;border-top: 1px dashed #ddd;background-color: #f9f9f9;">
                                        ' . ($_POST['product'] == 1 ? 'Bộ sản phẩm 12 màu' : 'Bộ sản phẩm 6 màu') . '
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 10px;border-top: 1px dashed #ddd;"><strong>Số lượng:</strong></td>
                                    <td style="padding: 8px 10px;border-top: 1px dashed #ddd;">
                                        ' . $_POST['quantity'] . '
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
                                                                              
                                                                            </tbody>
                                                                        </table></td>
                                                                </tr>
                                                            </tbody>
                                                        </table></td>
                                                </tr>
                                            </tbody>
                                        </table></td>
                                </tr>
                                <tr>
                                    <td align="center" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
                                            <tbody>
                                                <tr>
                                                    <td align="center" valign="top">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="800" style="border-collapse:collapse">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" valign="top">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" valign="top" style="color:#a6a6a6;font-family:\'Segoe UI\',sans-serif;font-size:14px;line-height:150%;padding:15px 0;text-align:center"><strong>Email </strong>info@funnymagic.vn</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table></td>
                                                                    <td align="center" valign="top">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" valign="top" style="color:rgb(166,166,166);font-family:\'Segoe UI\',sans-serif;font-size:14px;line-height:150%;padding:15px 0;text-align:center"><strong>Website</strong> funnymagic.vn</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" colspan="3" valign="top" style="color:rgb(102,102,102);font-family:\'Segoe UI\',sans-serif;font-size:12px;line-height:150%;text-align:center;padding-top:5px;padding-bottom:35px">
                                                                        <a href="<?php echo base_url(); ?>" style="color:#b7b7b7;text-align:center;text-decoration:none" target="_blank">© Copyright 2016 FunnyMagic.vn. All Rights Reserved</a>
                                                                        <br>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table></td>
                                                </tr>
                                            </tbody>
                                        </table></td>
                                </tr>
                            </tbody>
                        </table></td>
                </tr>
            </tbody>
        </table>
        </td></tr></tbody>
        </table>
    </body>
</html>';

require 'PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->isSMTP();
$mail->CharSet = 'UTF-8';
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'noreply.funnymagic@gmail.com';
$mail->Password = 'xvbgphcgabgonotd';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->setFrom('noreply.funnymagic@gmail.com', 'FunnyMagic');
$mail->addAddress('levuthietlong@gmail.com', 'LeVuThietLong');
$mail->isHTML(true);
$mail->Subject = '[FunnyMagic.vn] - Thông tin đặt hàng';
$mail->Body = $txt;

if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'OK';
}