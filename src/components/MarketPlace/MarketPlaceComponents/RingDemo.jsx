export function RingDemo({Image}) {
    return (
        <div className="Article">
            <div className="ArticleTitle">
                <h1 style={{ fontSize: '60px' }}>Whut is tho ??</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi dolorum quas beatae
                    harum praesentium accusamus qui deserunt esse? Molestias, illum. Nobis facere tenetur asperiores repellendus
                    quaerat dolorum ratione recusandae nesciunt voluptate porro quasi eaque ab facilis, laboriosam natus dignissimos?
                </p>
            </div>
            <div className="ImageArticle">
                <img src={Image} alt="Ring" width={"100%"} />
            </div>
        </div>
    );
}