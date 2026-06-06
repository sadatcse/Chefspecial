import { Link } from "react-router-dom";
import SocialShare from '../social/SocialShareV2';
import SearchWidget from '../widgets/SearchWidget';
import RecentPostsWidget from '../widgets/RecentPostsWidget';
// import CategoryWidget from '../widgets/CategoryWidget';
import GalleryWidget from '../widgets/GalleryWidget';
// import ArchiveWidget from '../widgets/ArchiveWidget';
import FollowWidget from '../widgets/FollowWidget';
import TagsWidget from '../widgets/TagsWidget';


interface DataType {
    id?: number;
    date?: string;
    dateIcon?: string;
    author?: string;
    authorIcon?: string;
    tag?: string;
    title?: string;
    text?: string;
    btnText?: string;
    btnIcon?: string;
    thumbFull?: string;
    thumb?: string;
    animationDelay?: string;
    imageName?: string;
}

const BlogSingleWithSidebarContent = ({ blogInfo }: { blogInfo: DataType }) => {
    const {
        date,
        dateIcon,
        author,
        authorIcon,
        tag,
        title,
        text,
        thumbFull,
        imageName,
    } = blogInfo;

    return (
        <>
            <div className="blog-area single full-blog right-sidebar full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                <div className="blog-style-two item">
                                    <div className="blog-item-box">
                                        <div className="thumb">
                                            <Link to="#">
                                                <img src={`/assets/img/blog/${thumbFull}`} alt={title} width={1900} height={995} />
                                            </Link>
                                        </div>
                                        <div className="info">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <Link to="#"><i className={dateIcon}></i> {date}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#"><i className={authorIcon}></i> {author}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#"><i className="fas fa-tags"></i> {tag}</Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            <h2>{title}</h2>
                                             {text && text.split('\n').map((line, index) =>
        line.includes('.') ? <p key={index}>{line}</p> : null
    )}

                                            {/* Sample Dummy Content (Optional) */}
                                          
                                        </div>
                                    </div>
                                </div>

                                {/* Post Author */}
                                <div className="post-author">
                                    <div className="thumb">
                                        <img src={`/assets/img/team/${imageName}`} alt="Author" />
                                    </div>
                                    <div className="info">
                                        <h4><Link to="#">{author}</Link></h4>
                                        <p>
                                            A passionate food lover and culinary storyteller. Sharing insights, experiences, and delicious tales from the Chef's Special kitchen.
                                        </p>
                                    </div>
                                </div>

                                {/* Post Tags & Share */}
                                <div className="post-tags share">
                                    <div className="tags">
                                        <h4>Tags: </h4>
                                        <Link to="#">{tag}</Link>
                                    </div>
                                    <div className="social">
                                        <h4>Share:</h4>
                                        <ul>
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div>

                                {/* Navigation Between Posts (Dummy for now) */}
                                {/* <div className="post-pagi-area">
                                    <div className="post-previous">
                                        <Link to="#">
                                            <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                                            <div className="nav-title">Previous Post <h5>Previous Title</h5></div>
                                        </Link>
                                    </div>
                                    <div className="post-next">
                                        <Link to="#">
                                            <div className="nav-title">Next Post <h5>Next Title</h5></div>
                                            <div className="icon"><i className="fas fa-angle-double-right"></i></div>
                                        </Link>
                                    </div>
                                </div> */}


                            </div>

                            {/* Sidebar */}
                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <RecentPostsWidget />
                                    {/* <CategoryWidget /> */}
                                    <GalleryWidget />
                                    {/* <ArchiveWidget /> */}
                                    <FollowWidget />
                                    <TagsWidget />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingleWithSidebarContent;