import React from 'react';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import HeroWave from './components/HeroWave/HeroWave';
import Info from './components/Info/Info';
import Feed from './components/Feed/Feed';
import Boxes from './components/Boxes/Boxes';
import HearMore from './components/HearMore/HearMore';
import Quotes from './components/Quotes/Quotes';
import MainFooter from './components/MainFooter/MainFooter';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Course from './components/Course/Course';
import CourseLesson from './components/CourseLesson/CourseLesson';
import ClassesHero from './components/ClassesHero/ClassesHero';
import Classes from './components/Classes/Classes';
import Footer from './components/Footer/Footer';
import CoursePreview  from './components/CoursePreview/CoursePreview';
import Lesson from './components/Lesson/Lesson';
import ProfileCourse from './components/ProfileCourse/ProfileCourse';
import TNav from './components/TNav/TNav';
import TDash from './components/TDash/TDash';
import CourseUpload from './components/CourseUpload/CourseUpload';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'home', //t_dashboard
      isSignedin: false,
      role: '',
      user: {},
      currentCourseId: '',
      lessons: [],
      courses: [],
      courses_ids: [],
      searchedCourses: [],
      searchedTitle: ''
    }
  }

  toCoursesSearch = (title) => {
    fetch(`http://localhost:3000/courses/search/${title}`)
    .then(res => res.json())
    .then(data => {
      if (data) {
        this.setState({ searchedCourses: data });
        this.setState({ searchedTitle: title });
        this.onRouteChange(`courses/search`);
      }
    })
    .catch(err => console.log);
  }

  setCurrentCourseId = (id) => {
    this.setState({ currentCourseId: id });
    console.log('state id:', this.state.currentCourseId);
    console.log('given id:', id);
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      role: data.role
    }})
    this.setState({ isSignedin: true });
    // this.setState(Object.assign(this.state.user, {courses: [], lessons: []}));
  }

  getLessons = () => {
    fetch(`http://localhost:3000/lessons/${this.state.currentCourseId}`)
    .then(res => res.json())
    .then(data => {
        this.setState({ lessons: data });
    })
    .catch(err => {
        console.log('error')
    })
  }

  // getCourses = async () => {
  //   let courses_ids = [];
  //   fetch(`http://localhost:3000/profile_courses/${Number(this.state.user.id)}`)
  //   .then(res => res.json())
  //   .then(data => {
  //       if (data.length > 0) {
  //           courses_ids =  data;
  //       }
  //       else {
  //           console.log('error');
  //       }
  //   })
  //   .catch(err => console.log);

  //   await new Promise(resolve => setTimeout(resolve, 500));
  //   fetch(`http://localhost:3000/profile/${this.state.courses_ids.toString()}`)
  //   .then(res => res.json())
  //   .then(data => {
  //       this.setState({ courses: data });
  //   })
  //   .catch(err => {
  //       console.log('error')
  //   })
  // }

  setRole = (role) => {
    this.setState({ role: role });
  }

  onRouteChange = ((route) => {
    if (this.state.user.id) {
      this.setState({route: route});
    }
    if (route === 'profile' && !this.state.isSignedin) {
      this.setState({ route: 'signin' });
    } 
    else if (route === `courses/${this.state.currentCourseId}` && !this.state.isSignedin) {
      this.setState({ route: 'signin' })
    }
    else if (route === 'profile' && this.state.isSignedin && this.state.user.role === 'teacher') {
      this.setState({ route: 't_dashboard' });
    }
    else {
      this.setState({ route: route });
    }
  })

  changeActive = (active) => {
    document.getElementById('home').classList.toggle('active');
    document.getElementById(active).classList.toggle('active');
  }

  menuClick = (evt) => {
      const menu = document.querySelector('.menu');
      const navbar = document.querySelector('.navbar');
      menu.classList.toggle('none');
      navbar.classList.toggle('pd10');
  };

  
  // componentDidMount() {
  //   window.addEventListener('load', this.handleLoad);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('load', this.handleLoad)
  // }
  
  // handleLoad() {
  //   document.querySelector('.loader-wrapper').remove(); 
  //   document.body.style.overflow = 'visible';
  // }

  render() {
    const { route } = this.state;

    if (route === 'home') {
      return(
        <div>
          <Nav onRouteChange={this.onRouteChange} menuClick={this.menuClick} />
          <Menu onRouteChange={this.onRouteChange} />
          <Home />
          <HeroWave />
          <Info />
          <Feed role={this.state.role} onRouteChange={this.onRouteChange} />
          <Boxes setRole={this.setRole} onRouteChange={this.onRouteChange} />
          <HearMore />
          <Quotes />
          <MainFooter />
          {/* <LoadingScreen /> */}
        </div>
      )
    }else if (route === 'classes') {
      return (
        <div>
          <Nav onRouteChange={this.onRouteChange} menuClick={this.menuClick} />
          <Menu onRouteChange={this.onRouteChange} />
          <ClassesHero />
          <Classes toCoursesSearch={this.toCoursesSearch} onRouteChange={this.onRouteChange} />
          <Footer onRouteChange={this.onRouteChange} />
        </div>
      )
    } else if (route === 'signin') {
      return (
        <div>
          <Nav onRouteChange={this.onRouteChange} menuClick={this.menuClick} />
          <Menu onRouteChange={this.onRouteChange} />
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        </div>
      )
    } else if (route === 'register') {
      return (
        <div>
          <Nav onRouteChange={this.onRouteChange} menuClick={this.menuClick} />
          <Menu onRouteChange={this.onRouteChange} />
          <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} role={this.state.role} />
        </div>
      )
    } else if (route === 'profile') {
      return (
        <div>
          <Nav onRouteChange={this.onRouteChange} menuClick={this.menuClick} />
          <Menu onRouteChange={this.onRouteChange} />
          <Profile setCurrentCourseId={this.setCurrentCourseId} onRouteChange={this.onRouteChange} currentUser={this.state.user} />
        </div>
      )
    } else if (route === `courses/${this.state.currentCourseId}`) {
      return (
        <div>
          <Nav onRouteChange={this.onRouteChange} menuClick={this.menuClick} />
          <Menu onRouteChange={this.onRouteChange} />
          <Course onRouteChange={this.onRouteChange} course_id={this.state.currentCourseId} />
        </div>
      )
    }
    else if (route === 'courses/search') {
      let profileCourses = [];
      if (this.state.searchedCourses.length > 0) {
          for (let item of this.state.searchedCourses) {
              profileCourses.push(<ProfileCourse setCurrentCourseId={this.setCurrentCourseId} onRouteChange={this.onRouteChange} key={item.course_id} course_info={item} />);
          }
      }
      return (
        <div>
          <Nav onRouteChange={this.onRouteChange} menuClick={this.menuClick} />
          <Menu onRouteChange={this.onRouteChange} />
          <section className='profile-container'>
              <div className='profile'>
                  <h1>{this.state.searchedTitle} Courses</h1>
                  {
                      profileCourses.length > 0 ? <div className='profile-courses-list'>
                          {profileCourses}                        
                      </div>
                      : <p className='courses_err'>No such courses yet</p>
                  }
              </div>
          </section>
        </div>
      )
    }
    else if (route === 't_dashboard') {
      return (
        <TDash setCurrentCourseId={this.setCurrentCourseId} onRouteChange={this.onRouteChange} user={this.state.user} />
      )
    }
    else if (route === 'c_upload') {
      return (
        <CourseUpload user={this.state.user} onRouteChange={this.onRouteChange} />
      )
    }
    else if (route === 'testing') {
      return (
        <div>
          <Nav onRouteChange={this.onRouteChange} menuClick={this.menuClick} />
          <Menu onRouteChange={this.onRouteChange} />
          <Lesson />
        </div>
      )
    }
  }
}

export default App;
