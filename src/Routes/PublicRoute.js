import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollTopBtn from "../Hooks/ScrollTopBtn";
import Skeleton from "../Page/Skeleton";
import Messenger from "../Public/components/home/Messenger";

const Layout = React.lazy(() => import("../Public/layout/layout"));
const HomePage = React.lazy(() => import("../Public/container/home/Home"));
const PageNotFound = React.lazy(() => import("../Page/PublicPageNotFound"));

// About Section Route Start Here
const Introduction = React.lazy(() =>
  import("../Public/container/about/Introduction")
);
const BatsyayanFeatures = React.lazy(() =>
  import("../Public/container/about/Features")
);
const History = React.lazy(() => import("../Public/container/about/History"));
const Leadership = React.lazy(() =>
  import("../Public/container/about/Leadership")
);

const Team = React.lazy(() => import("../Public/container/about/Team"));
const Gallery = React.lazy(() => import("../Public/container/about/Gallery"));

// Acadmics Section Route Start Here

const AcademicOverview = React.lazy(() =>
  import("../Public/container/academics/Overview")
);

const PrimarySchool = React.lazy(() =>
  import("../Public/container/academics/PrimaryScl")
);
const SecondarySchool = React.lazy(() =>
  import("../Public/container/academics/SecondaryScl")
);
const HigherSecondarySchool = React.lazy(() =>
  import("../Public/container/academics/HigherScl")
);

// Admission Section Route Start Here

const AdmissionOverview = React.lazy(() =>
  import("../Public/container/admission/Overview")
);
const ApplicationProcess = React.lazy(() =>
  import("../Public/container/admission/ApplicationProcess")
);
const Fee = React.lazy(() => import("../Public/container/admission/FeeAid"));
const FAQs = React.lazy(() => import("../Public/container/admission/FAQs"));
const Contact = React.lazy(() =>
  import("../Public/container/admission/Contact")
);

// Athletic Route Start Here

const AthleticOverview = React.lazy(() =>
  import("../Public/container/athletics/Overview")
);
const Strength = React.lazy(() =>
  import("../Public/container/athletics/Strength")
);
const SportMedicine = React.lazy(() =>
  import("../Public/container/athletics/Medicine")
);
const AthFacilities = React.lazy(() =>
  import("../Public/container/athletics/Facilities")
);

// Facilities Route Start Here
const Transportation = React.lazy(() =>
  import("../Public/container/facilities/Transportation")
);

const Library = React.lazy(() =>
  import("../Public/container/facilities/Library")
);
const Hostel = React.lazy(() =>
  import("../Public/container/facilities/Hostel")
);
const HealthService = React.lazy(() =>
  import("../Public/container/facilities/HealthService")
);
const ComputerLab = React.lazy(() =>
  import("../Public/container/facilities/ComputerLab")
);

const ScienceLab = React.lazy(() =>
  import("../Public/container/facilities/ScienceLab")
);

// Other Seciton Import Here
const Articles = React.lazy(() =>
  import("../Public/container/others/Articles")
);

const ArticlePost = React.lazy(() =>
  import("../Public/container/others/ArticlePost")
);

const Event = React.lazy(() => import("../Public/container/others/Event"));
const Calendar = React.lazy(() =>
  import("../Public/container/others/Calendar")
);

const Announcement = React.lazy(() =>
  import("../Public/container/others/Announcment")
);
const Routine = React.lazy(() => import("../Public/container/others/Routine"));

const Login = React.lazy(() => import("../Public/container/portal/Login"));

const PublicRoute = () => {
  return (
    <>
      <ScrollTopBtn />
      <Messenger />
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/batsyayan/home/" element={<HomePage />} />

            {/* About Route Start Here */}
            <Route
              exact
              path="/batsyayan/introduction/"
              element={<Introduction />}
            />
            <Route
              exact
              path="/batsyayan/features/"
              element={<BatsyayanFeatures />}
            />
            <Route exact path="/batsyayan/history/" element={<History />} />
            <Route
              exact
              path="/batsyayan/leadership/"
              element={<Leadership />}
            />
            <Route exact path="/batsyayan/team/" element={<Team />} />
            <Route exact path="/batsyayan/gallery/" element={<Gallery />} />

            {/* Academics Route Start Here */}
            <Route
              exact
              path="/batsyayan/academics/"
              element={<AcademicOverview />}
            />
            <Route exact path="/primary/school/" element={<PrimarySchool />} />
            <Route
              exact
              path="/secondary/school/"
              element={<SecondarySchool />}
            />
            <Route
              exact
              path="/high/school/"
              element={<HigherSecondarySchool />}
            />

            {/* Admission Route Start Here */}
            <Route
              exact
              path="/admission/overview/"
              element={<AdmissionOverview />}
            />
            <Route
              exact
              path="/application/process/"
              element={<ApplicationProcess />}
            />
            <Route exact path="/fee/financial/aid/" element={<Fee />} />
            <Route
              exact
              path="/frequently/asked/question/"
              element={<FAQs />}
            />
            <Route exact path="/contact/" element={<Contact />} />

            {/* Athletic Route Start */}
            <Route
              exact
              path="/athletics/overview/"
              element={<AthleticOverview />}
            />
            <Route
              exact
              path="/strength/conditioning/"
              element={<Strength />}
            />
            <Route exact path="/sports/medicine/" element={<SportMedicine />} />
            <Route
              exact
              path="/athletic/facilities/"
              element={<AthFacilities />}
            />

            {/* Facilities Route Start Here */}

            <Route exact path="/transportation/" element={<Transportation />} />
            <Route exact path="/library/" element={<Library />} />
            <Route exact path="/hostel/" element={<Hostel />} />
            <Route exact path="/health/service/" element={<HealthService />} />
            <Route exact path="/computer/lab/" element={<ComputerLab />} />
            <Route exact path="/science/lab/" element={<ScienceLab />} />

            {/* Other Routes Start Here */}
            <Route exact path="/batsyayan/articles/" element={<Articles />} />
            <Route
              exact
              path="/batsyayan/article/:slug/"
              element={<ArticlePost />}
            />
            <Route exact path="/events/" element={<Event />} />
            <Route exact path="/calendar/" element={<Calendar />} />
            <Route
              exact
              path="/batsyayan/announcement/"
              element={<Announcement />}
            />
            <Route exact path="/exam/routine/" element={<Routine />} />
            <Route exact path="/login/" element={<Login />} />

            {/* Page Not Found  */}
            <Route exact path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default PublicRoute;
