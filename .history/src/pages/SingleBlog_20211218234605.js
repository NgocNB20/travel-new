import React from 'react'
import anh2 from '../assets/image/anh2.jpg';

function SingleBlog() {
    return (
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-details__image">
                            <img src={anh2} alt="Giới thiệu chung về tỉnh Phú Thọ" className="img-fluid" />
                        </div>
                        <div className="blog-details__content">
                            <ul className="list-unstyled blog-one__meta">
                                <li><a href="#"><i className="far fa-calendar-alt" /> 05/06/2021</a></li>
                                <li><a href="#"><i className="far fa-comments" /> 0 Bình luận</a></li>
                                <li><a href="#"><i className="fas fa-eye" /> 48 Lượt xem</a></li>
                                <li><a href="#" className="add-favorite"><i className="fa fa-heart" /><span id="Blog_Likes_1">2</span> Lượt thích</a></li>
                            </ul>
                            <h3>Giới thiệu chung về tỉnh Phú Thọ</h3>
                            <p className="blog-details__summary">Phú Thọ là một tỉnh thuộc vùng Đông Bắc Bộ, Việt Nam. Phía đông giáp tỉnh Vĩnh Phúc và thủ đô Hà Nội, phía tây giáp tỉnh Sơn La và tỉnh Yên Bái, phía nam giáp tỉnh Hòa Bình, phía bắc giáp tỉnh Tuyên Quang.  Đây là tỉnh nằm trong quy hoạch vùng thủ đô Hà Nội.</p>
                            <div className="blog-details__details"><p><b>I. Điều kiện địa lý tự nhiên</b></p><p><b>1.Vị trí địa lý</b></p><p>Phú Thọ là tỉnh thuộc khu vực miền núi, trung du phía Bắc, nằm trong khu vực giao lưu giữa vùng Đông Bắc, đồng bằng sông Hồng và Tây Bắc (vị trí địa lý mang ý nghĩa trung tâm của tiểu vùng Tây – Đông - Bắc). Phú Thọ cách Hà Nội 80 km, cách sân bay Nội Bài 60 km, cách cửa khẩu Lào Cai, cửa khẩu Thanh Thủy hơn 200 km, cách Hải Phòng 170 km và cảng Cái Lân 200 km.</p><p>Phú Thọ nằm ở trung tâm các hệ thống giao thông đường bộ, đường sắt và đường sông từ các tỉnh thuộc Tây - Đông - Bắc đi Hà Nội, Hải Phòng và các nơi khác. Là cầu nối giao lưu kinh tế - văn hoá - khoa học kỹ thuật giữa các tỉnh đồng bằng Bắc Bộ với các tỉnh miền núi Tây Bắc.</p><p>Quốc lộ 2 qua Phú Thọ đi Tuyên Quang, Hà Giang sang Vân Nam (Trung Quốc), quốc lộ 70 đi Yên Bái, Lào Cai sang Vân Nam (Trung Quốc), quốc lộ 32 qua Phú Thọ đi Yên Bái, Sơn La, cùng với các tỉnh bạn trong cả nước và quốc tế.</p><p>Phú Thọ có 12 đơn vị hành chính gồm thành phố Việt Trì, thị xã Phú Thọ, huyện Đoan Hùng, Hạ Hoà, Thanh Đa, Cẩm Khê, Phù Ninh, Lâm Thao, Tam Nông, Thanh Thủy, Thanh Sơn và Yên Lập. Thành phố Việt Trì là trung tâm chính trị - kinh tế - văn hoá của tỉnh; 274 đơn vị hành chính cấp xã gồm 14 phường, 10 thị trấn và 250 xã, trong đó có 214 xã miền núi, 7 xã vùng cao và 50 xã đặc biệt khó khăn.</p><p><b>2. Đặc điểm địa hình</b></p><p>Phú Thọ là tỉnh miền núi, trung du nên địa hình bị chia cắt, được chia thành tiểu vùng chủ yếu. Tiểu vùng núi cao phía Tây và phía Nam của Phú Thọ, tuy gặp một số khó khăn về việc đi lại, giao lưu song ở vùng này lại có nhiều tiềm năng phát triển lâm nghiệp, khai thác khoáng sản và phát triển kinh tế trang trại. Tiểu vùng gò, đồi thấp bị chia cắt nhiều, xen kẽ là đồng ruộng và dải đồng bằng ven sông Hồng, hữu Lô, tả Đáy. Vùng này thuận lợi cho việc trồng các loại cây công nghiệp, phát triển cây lương thực và chăn nuôi.</p><p><b>3. Khí hậu</b></p><p>Phú Thọ nằm trong vùng khí hậu nhiệt đới gió mùa, có một mùa đông lạnh. Nhiệt độ trung bình năm khoảng 23°C, lượng mưa trung bình trong năm khoảng 1.600 đến 1.800 mm. Độ ẩm trung bình trong năm tương đối lớn, khoảng 85 – 87%. Nhìn chung khí hậu của Phú Thọ thuận lợi cho việc phát triển cây trồng, vật nuôi đa dạng.</p><p><b>II. Tài nguyên thiên nhiên</b></p><p><b>1. Tài nguyên đất</b></p><p>Tổng diện tích tự nhiên của Phú Thọ là 3.519,56 km², theo kết quả điều tra thổ nhưỡng gần đây, đất đai của Phú Thọ được chia theo các nhóm sau: đất feralít đỏ vàng phát triển trên phiến thạch sét, diện tích 116.266,27 ha chiếm tới 66,79% (diện tích điều tra). Đất thường có độ cao trên 100 m, độ dốc lớn, tầng đất khá dày, thành phần cơ giới nặng, mùn khá. Loại đất này thường sử dụng trồng rừng, một số nơi độ dốc dưới 25° có thể sử dụng trồng cây công nghiệp.</p><p>Hiện nay, Phú Thọ mới sử dụng được khoảng 54,8% tiềm năng đất nông – lâm nghiệp; đất chưa sử dụng còn 81,2 nghìn ha, trong đó đồi núi có 57,86 nghìn ha.</p><p>Đánh giá các loại đất của Phú Thọ thấy rằng, đất đai ở đây có thể trồng cây nguyên liệu phục vụ cho một số ngành công nghiệp chế biến, nếu có vốn đầu tư và tổ chức sản xuất có thể tăng năng suất ở nhiều nơi; đưa hệ số sử dụng đất lên đến 2,5 lần (hiện nay hệ số sử dụng đất mới đạt khoảng 2,2), đồng thời bảo vệ và làm giàu thêm vốn tài nguyên này; cho phép phát triển công nghiệp và đô thị.</p><p><b>2. Tài nguyên rừng</b></p><p>Diện tích rừng hiện nay của Phú Thọ nếu đem so sánh với các tỉnh trong cả nước thì được xếp vào những tỉnh có độ che phủ rừng lớn (42% diện tích tự nhiên). Với diện tích rừng hiện có 144.256 ha, trong đó có 69.547 ha rừng tự nhiên, 74.704 ha rừng trồng, cung cấp hàng vạn tấn gỗ cho công nghiệp chế biến hàng năm. Các loại cây chủ yếu như bạch đàn, mỡ, keo, bồ đề và một số loài cây bản địa đang trong phát triển (đáng chú ý nhất vẫn là những cây phục vụ cho ngành công nghiệp sản xuất giấy).</p><p><b>3. Tài nguyên khoáng sản</b></p><p>Phú Thọ không phải là tỉnh giàu tài nguyên khoáng sản, nhưng lại có một số loại có giá trị kinh tế như đá xây dựng, cao lanh, fenspat, nước khoáng. Cao lanh có tổng trữ lượng khoảng 30 triệu tấn, điều kiện khai thác thuận lợi, trữ lượng chưa khai thác lên đến 24,7 triệu tấn. Fenspat có tổng trữ lượng khoảng 5 triệu tấn, điều kiện khai thác thuận lợi, trữ lượng chưa khai thác còn khoảng 3,9 triệu tấn, nước khoáng có tổng trữ lượng khoảng 48 triệu lít, điều kiện khai thác thuận lợi, trữ lượng chưa khai thác còn khoảng 46 triệu lít.</p><p>Ngoài ra, Phú Thọ còn có một số loại khoáng sản khác như: quactít trữ lượng khoảng 10 triệu tấn, đá vôi 1 tỷ tấn, pyrít trữ lượng khoảng 1 triệu tấn, tantalcum trữ lượng khoảng 0,1 triệu tấn, và nhiều cát sỏi với điều kiện khai thác hết sức thuận lợi.</p><p>Đây là một số lợi thế cho phép Phú Thọ phát triển các ngành công nghiệp như xi măng, đá xây dựng, các loại vật liệu xây dựng có ưu thế cạnh tranh.</p><p><b>III. Tiềm năng kinh tế</b></p><p><b>1. Những lĩnh vực kinh tế lợi thế</b></p><p>Phú Thọ có nhiều tiềm năng phát triển công nghiệp chế biến nông – lâm sản. Khai thác và chế biến khoáng sản, sản xuất vật liệu xây dựng, công nghiệp dệt, may vì ở Phú Thọ có nguồn nguyên liệu, lực lượng lao động tại chỗ; đã xây dựng được một số khu công nghiệp, cụm công nghiệp và đầu tư với tốc độ nhanh.</p><p>Khu di tích lịch sử Đền Hùng gắn liền với lịch sử dựng nước của dân tộc; đầm Ao Châu, vườn quốc gia Xuân Sơn, vùng nước khoáng nóng Thanh Thủy, khu du lịch núi Trang… là những tiềm năng lớn để Phú Thọ phát triển du lịch.</p><p><b>2. Tiềm năng du lịch</b></p><p>Phú Thọ có bản sắc văn hóa dân tộc gắn liền với lịch sử dựng nước và giữ nước từ thời Hùng Vương với trên 200 di tích lịch sử, danh lam thắng cảnh, di tích cách mạng kháng chiến đều có khả năng khai thác phục vụ cho tham quan, du lịch.</p><p>Phú Thọ có nhiều di tích nổi tiếng như: khu di tích Đền Hùng (Lâm Thao), đầm Ao Châu, Ao Giời, Suối Tiên, khu rừng nguyên sinh Xuân Sơn (33.687 ha, trong đó 15.000 ha rừng nguyên sinh), vùng nước khoáng nóng Thanh Thuỷ, đền Mẫu Âu Cơ, đình Lâu Thượng, Hùng Lô, Đào Xá, chùa Xuân Lãng, chùa Phúc Khánh; các khu di chỉ; Phùng Nguyên, Sơn Vi, Gò Mun…Các di tích kháng chiến: chiến khu Hiền Lương (Hạ Hoà). Vạn Thắng (Cẩm Khê), tượng đài kháng chiến sông Lô (Đoan Hùng), khu lưu niệm Chủ tịch Hồ Chí Minh ở Cổ Tiết (Tam Nông), Chu Hóa (Lâm Thao)…</p><p>Phú Thọ còn là miền đất lưu giữ nhiều giá trị văn hoá dân tộc đặc sắc của tổ tiên, mang tính giáo dục truyền thống uống nước nhớ nguồn; lễ hội Đền Hùng, hội phết (Hiền Quang), hội làng Đào Xá, Sơn Vi…; nhiều làn điệu dân ca, xoan ghẹo, nhiều trò diễn dân gian, nhiều truyền thuyết - huyền thoại về dựng nước, nhiều truyện cổ tích, ngụ ngôn, truyện cười giàu tính nhân văn, mang nét đặc sắc của vùng đất Tổ, đặc trưng văn hoá Lạc Hồng.</p></div>
                            <div class="blog-details__bottom"><div class="sidebar__social-list"><span class="px-2">Chia sẻ</span><a href="https://www.facebook.com/sharer/sharer.php?u=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1&amp;title=Gi%e1%bb%9bi+thi%e1%bb%87u+chung+v%e1%bb%81+t%e1%bb%89nh+Ph%c3%ba+Th%e1%bb%8d" target="_blank"><i class="fab fa-facebook-f"></i></a><a href="https://twitter.com/intent/tweet?url=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1&amp;text=Gi%e1%bb%9bi+thi%e1%bb%87u+chung+v%e1%bb%81+t%e1%bb%89nh+Ph%c3%ba+Th%e1%bb%8d" target="_blank"><i class="fab fa-twitter"></i></a><a href="https://telegram.me/share?url=Gi%e1%bb%9bi+thi%e1%bb%87u+chung+v%e1%bb%81+t%e1%bb%89nh+Ph%c3%ba+Th%e1%bb%8d&amp;text=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1" target="_blank"><i class="fab fa-telegram-plane"></i></a><a href="https://pinterest.com/pin/create/button/?url=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1&amp;media=%2fDataFiles%2f2021%2f06%2fFiles%2f20210605-102218-KYUOhFG9.jpg&amp;description=Gi%e1%bb%9bi+thi%e1%bb%87u+chung+v%e1%bb%81+t%e1%bb%89nh+Ph%c3%ba+Th%e1%bb%8d" target="_blank"><i class="fab fa-pinterest-p"></i></a><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3a%2f%2fphutho.vietnaminfo.net%2fvi%2fblog%2fdetails%2fgioi-thieu-chung-ve-tinh-phu-tho-1" target="_blank"><i class="fab fa-linkedin-in"></i></a></div></div>
                            <div className="comment-one"><h3 className="comment-one__title">0 bình luận</h3></div>
                            <div className="comment-form" id="comment-form">
                                <input type="hidden" id="hdCommentID" defaultValue />
                                <input type="hidden" id="hdBlogID" defaultValue={1} />
                                <input type="hidden" id="hdLang" defaultValue="vi" />
                                <h3 className="comment-form__title">Viết bình luận của bạn</h3>
                                <form className="contact-one__form">
                                    <div className="row low-gutters">
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <input type="text" id="name" placeholder="Họ và tên" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <input type="text" id="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-group">
                                                <textarea id="message" placeholder="Nội dung" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-group">
                                                <button type="button" className="thm-btn contact-one__btn">Gửi bình luận</button></div>
                                            </div>
                                        </div>
                                </form>
                                </div>  
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </section> 
    )
}

export default SingleBlog
