const e = React.createElement;
let infoContent = document.querySelector(".info-watches-content");
let collection = document.querySelector(".collections-visible");

// MENU --------------------------------------------------------------------------------
function IconNavLine(props) {
  return e("div", { className: "line-icon-item", key: "div" }, [
    e("img", { src: props.navIcon.link, alt: props.navIcon.span, key: "img" }),
    e("span", { key: "span" }, props.navIcon.span),
  ]);
}

function MenuLinks(props) {
  return e(
    "li",
    { key: "li" },
    e("a", { href: props.menulink.link, key: "a" }, props.menulink.name)
  );
}

class NavLine extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="line">
          <div className="line-logo">
            <p>Custom Logo Watches & More, Free Shipping & Returns</p>
          </div>
          <div className="line-icon">
            <IconNavLine
              navIcon={{ link: "img/icon/search.png", name: "search" }}
            />
            <IconNavLine
              navIcon={{ link: "img/icon/cart.png", name: "cart", span: "3" }}
            />
            <IconNavLine
              navIcon={{ link: "img/icon/user.png", name: "user" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
class NavBar extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="menu-content">
          <div className="menu-logo">
            <div className="logo">
              <h1>ALW LOGO</h1>
            </div>
            <div className="logo-text">
              <p>American Logo Watch</p>
            </div>
          </div>
          <div className="menu-list">
            <ul>
              <MenuLinks menulink={{ link: "#", name: "WATCHES" }} />
              <MenuLinks menulink={{ link: "#", name: "SERVICES" }} />
              <MenuLinks menulink={{ link: "#", name: "FAQS" }} />
              <MenuLinks menulink={{ link: "#", name: "CONTACT" }} />
              <MenuLinks menulink={{ link: "#", name: "REQUEST VIRTUAL" }} />
            </ul>
          </div>
          <div className="call">
            <div className="call-icon">
              <img src="img/icon/phone.png" alt="callMe" />
            </div>
            <div className="call-number">
              <a href="tel:1 (800) 862 6772">1 (800) 862 6772</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Info --------------------------------------------------------------------------------

class InfoAnimation extends React.Component {
  state = {
    clasessAnimated: "info-text info-stay",
    slideIndex: 0,
    text: [
      {
        h2: "Our Store",
        p:
          "As many of you know, our company has a wide field of activity: we are engaged in the development of products, publish design and code related articles, and support the Market, where designers publish their products to sell. FS Industrie is created for digital designs where flexibility is essential. Designed by Phil Garnham and Fernando Mello, the font combines aesthetics with functional utility, delivering a precise and direct feel.",
      },
      {
        h2: "Now Store",
        p:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, molestiae atque maiores praesentium quis, exercitationem quia, incidunt id sit nulla velit reprehenderit perferendis quod? Iste rerum eveniet eos ullam vel!",
      },
      {
        h2: "Element 3",
        p:
          "molestiae atque maiores praesentium quis, exercitationem quia, incidunt id sit nulla velit As many of you know, our company has a wide fieldAs many of you knowAs many of you know, our company has a wide field of activity: we are engaged in the development of products,, our company has a wide field of activity: we are engaged in the development of products, of activity: we are engaged in the development of products,reprehenderit perferendis quod? Iste rerum eveniet eos ullam vel!",
      },
    ],
  };
  nextElementText(event) {
    let newSlideIndex = this.state.slideIndex;
    let newAnimated = this.state.clasessAnimated;
    let target = event.target;
    console.log(newAnimated);
    if (target && target.classList.contains("left-arrow")) {
      console.log(newAnimated);
      if (newSlideIndex > 0) {
        newSlideIndex = this.state.slideIndex - 1;
      } else {
        newSlideIndex = this.state.text.length - 1;
      }
    } else {
      if (newSlideIndex < this.state.text.length - 1) {
        newSlideIndex = this.state.slideIndex + 1;
      } else {
        newSlideIndex = 0;
      }
    }
    this.setState({ slideIndex: newSlideIndex });
    this.setState({ clasessAnimated: newAnimated });
  }

  BlockText() {
    return (
      <div className={this.state.clasessAnimated}>
        <div className="info-watches-title">
          <h2>{this.state.text[this.state.slideIndex].h2}</h2>
        </div>
        <div className="info-watches-text">
          <p>{this.state.text[this.state.slideIndex].p}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="info-box">
        <div
          className="info-watches-arrow"
          onClick={this.nextElementText.bind(this)}
        >
          <div className="arrow-left">
            <img
              src="img/icon/left-arrow.png"
              alt="left-arrow"
              className="left-arrow"
            />
          </div>
          <div className="arrow-right">
            <img
              src="img/icon/right-arrow.png"
              alt="right-arrow"
              className="right-arrow"
            />
          </div>
        </div>
        <div className="info-text-box">{this.BlockText()}</div>
      </div>
    );
  }
}

// Collections --------------------------------------------------------------------------------
// function CreateElement(i) {
//   return (e("div", { className: 'collections-watch', key: "watch__div" },
//     e("img", { src: this.state.box[i].img, alt: this.state.box[i].name, key: "watch__img" }),
//     e("h3", { key: 'watch_name' }, this.state.box[i].name),
//     e("p", { key: 'watch_price' }, '$' + this.state.box[i].price + '.00'))
//   );
// }

function CreateElement(props) {
  return (
    <div className="collections-watch">
              <img src={props.elem.img} alt="brown" />
              <h3>{props.elem.name}</h3>
              <p>{'$' + props.elem.price + '.00'}</p>
            </div>
  )
}
class Collection extends React.Component {
  state = {
    box: [
      {
        img: "img/collections/watchCollection-1.png",
        name: "ADRIATICA ADR",
        price: 650,
      },
      {
        img: "img/collections/watchCollection-2.png",
        name: "SIEKO SNZGO7K1",
        price: 125,
      },
      {
        img: "img/collections/watchCollection-3.png",
        name: "ROAMER RM220837",
        price: 250,
      },
      {
        img: "img/collections/watchCollection-1.png",
        name: "ROLLEX ADR",
        price: 650,
      },
    ],
    
  }
  renderCars() {
    return this.state.box.map(elem => {
      return (
        <CreateElement elem={elem} key={elem.name + Math.random()} />
      )
    })
  }
  render() {
    return (
      this.renderCars()
    );

  }
}
// ReactDOM.render(<Collection />, collection);









ReactDOM.render(<InfoAnimation />, infoContent);
ReactDOM.render(<NavLine />, document.getElementById("nav-line"));
ReactDOM.render(<NavBar />, document.getElementById("nav-bar"));
