
document.querySelectorAll('.media').forEach(media => {
    const video = media.querySelector('.hover-video');
    
    media.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        video.play(); 
    });

    media.addEventListener('mouseleave', () => {
        video.pause(); 
    });
});



// document.addEventListener('DOMContentLoaded', function() {
//     const other = document.querySelector('.other');
    
//     window.addEventListener('scroll', function() {
//         // 根据滚动位置设置水平滚动距离
//         const scrollAmount = window.scrollY * 0.5; // 调整这个值以获得所需的效果
//         other.style.transform = `translateX(-${scrollAmount}px)`;
//     });
// });

//----------------------------
// document.addEventListener('DOMContentLoaded', function() {
//     // 处理视频播放的事件
//     document.querySelectorAll('.media').forEach(media => {
//         const video = media.querySelector('.hover-video');
        
//         media.addEventListener('mouseenter', () => {
//             video.currentTime = 0;
//             video.play(); 
//         });

//         media.addEventListener('mouseleave', () => {
//             video.pause(); 
//         });
//     });

//     // 处理水平滚动效果
//     const other = document.querySelector('.other');
    
//     window.addEventListener('scroll', function() {
//         // 根据滚动位置设置水平滚动距离
//         const scrollAmount = window.scrollY * 0.5; // 调整这个值以获得所需的效果
//         other.style.transform = `translateX(-${scrollAmount}px)`;
//     });

// });