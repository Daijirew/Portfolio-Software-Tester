import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
                <h2 className="section-title">Get In Touch</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2.5rem' }}>
                    I'm currently looking for new opportunities as a Junior Software Tester.
                    Whether you have a question or just want to say hi, my inbox is always open!
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    <a href="mailto:daijirew123@gmail.com" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                        Send Email
                    </a>
                </div>

                <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: '500' }}>Connect with me:</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>

                        {/* ส่วนที่แก้ไข: เปลี่ยนจาก Array ชื่ออย่างเดียว เป็น Object ที่มีทั้งชื่อและลิ้งก์ */}
                        {[
                            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/poomrapee-patum-74b553371/' },
                            { name: 'GitHub', url: 'https://github.com/Daijirew' },
                            { name: 'Facebook', url: 'https://www.facebook.com/daijirew/' }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"             // เปิดแท็บใหม่
                                rel="noopener noreferrer"   // เพื่อความปลอดภัยเมื่อใช้ target="_blank"
                                style={{
                                    color: 'var(--color-text-light)',
                                    fontWeight: '500',
                                    textDecoration: 'none' // (Optional) ลบเส้นใต้ลิงก์ออกให้สวยงาม
                                }}
                            >
                                {social.name}
                            </a>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;