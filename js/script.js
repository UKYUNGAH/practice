// 이벤트 핸들러 함수 정의
function changeImage(element, newImagePath) {
    element.src = newImagePath;
}

// DOMContentLoaded 이벤트를 사용하여 문서가 로드된 후 실행할 코드 정의
document.addEventListener('DOMContentLoaded', function () {
    // 모든 .list_wrap 요소에 대한 이벤트 리스너 추가
    var listItems = document.querySelectorAll('.list_wrap');

    listItems.forEach(function (listItem) {
        var productImage = listItem.querySelector('.productImage');

        listItem.addEventListener('mouseover', function () {
            changeImage(productImage, productImage.src.replace('.jpg', '_1.jpg'));
        });

        listItem.addEventListener('mouseout', function () {
            changeImage(productImage, productImage.src.replace('_1.jpg', '.jpg'));
        });
    });
});