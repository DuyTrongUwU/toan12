function chuyenTab(nutDuocBam, duongDanFile) {
    // 1. Tìm tất cả các nút và xóa trạng thái "active" (bỏ màu xanh)
    const tatCaCacNut = document.querySelectorAll('.tab-btn');
    tatCaCacNut.forEach(nut => {
        nut.classList.remove('active');
    });

    // 2. Thêm trạng thái "active" vào nút vừa được người dùng click
    nutDuocBam.classList.add('active');

    // 3. Thay đổi thuộc tính src của iframe để nạp file html con tương ứng vào
    document.getElementById('khung-noi-dung').src = duongDanFile;
}
