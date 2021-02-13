---
title: Install OpenLiteSpeed dan WordPress Secara Instan Di Linux
date: 2020-10-20 15:03:19 +07:00
permalink: "/install-openlitespeed-dan-wordpress-secara-instan-di-linux/"
categories:
- Linux
tags:
- openlitespeed
- ubuntu
- vps
id: 8437
author: Linux Mania
layout: post
guid: https://wildanfauzy.com/?p=8437
header-img: wp-content/uploads/2020/10/wordpress-on-openlitespeed.jpg
header-mask: '0.4'
---

Setelah kemarin nyoba vps, masalah bermunculan pada awalnya memasang panel webuzo terus ganti cyberpanel, pada akhirnya pake polosan aja, enggak pasang panel, cukup web server dari openlitespeed sama pasang cms wordpress, pas ngubek website ols ada cara paling gampang dengan cara One Click Install OLS, PHP, MySQL, WP and LSCache.

Akhirnya pasang ulang os linux, terus nyoba cara paling gambag tadi, vps kembali seperti bayi semua data panel dan semuanya dihapus, fresh install selanjutnya tinggal masuk ke ssh vps terus masukin kode dibawah ini atau bisa download ols1clk langsung di <a href="https://raw.githubusercontent.com/litespeedtech/ols1clk/master/ols1clk.sh" target="_blank" rel="noreferrer noopener">github</a>

    wget --no-check-certificate https://raw.githubusercontent.com/litespeedtech/ols1clk/master/ols1clk.sh && bash ols1clk.sh -w

Menurut website openlitespeed bisa dipasang di operation system ubuntu, debian, centos, untuk os ubutu support versi 14, 16, 18 dan os debian versi 7, 8,9 sedangkan os centos veris 6 dan 7, semuanya dengan os 64bit.<figure class="wp-block-image size-large">

<img loading="lazy" width="768" height="432" src="https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/10/ols.jpg?resize=768%2C432&ssl=1" alt="" class="wp-image-8438" data-recalc-dims="1" /> </figure>

Setelah berhasil masuk kes ssh vps dan memasang ols1clk.sh, selanjutnya menginstall cms wordpress dengan perintah dibawah ini.

    bash ols1clk.sh --wordpressplus <alamatdomainkamu.com>

<img loading="lazy" src="https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/10/Wordpressplus.png?resize=768%2C376&ssl=1" alt="" class="wp-image-8439" width="768" height="376" data-recalc-dims="1" /> images from openlitespeed

Tinggal klik Y udah deh tunggu prosesnya sampe selesai, sambil ngopi dulu dah wkwk, jika sudah beres masuk ke wp-admin dan webadmin ols, ingat password masih default dari ols1clk silakan ganti secepatnya, masih banyak perintah untuk mengganti username, password dan database, silakan kunjungi knowledgebase openlitespeed <a href="https://openlitespeed.org/kb/1-click-install/#Options" target="_blank" rel="noreferrer noopener">disini</a>.