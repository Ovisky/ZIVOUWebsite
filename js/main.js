// 返回顶部功能
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // 点击返回顶部
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// 表单提交处理
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // 这里可以添加表单验证逻辑
        
        // 模拟表单提交，并没有实际的效果哈哈哈
        alert('感谢您的留言，我们会尽快回复！');
        contactForm.reset();
    });
}
