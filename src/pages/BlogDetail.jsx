import React from "react";
import PickedPost from "./PickedPost";
import AuthorInfo from "../components/AuthorInfo";
import { AuthorInfoComment } from "../components/AuthorInfo";
import EditorPickCard from "../components/EditorPickCard";
import LeaveComment from "../components/LeaveComment";
const BlogDetail = () => {
  return (
    <div>
      <PickedPost className="w-full" />
      <div className="w-full mt-10">
        {/* Post Content */}
        <div className="flex justify-center">
          <div className="w-2/3 flex gap-4">
            {/* Post Date and minute count */}
            <div>
              <div className="flex gap-4 font-paytone justify-center items-center">
                <div>04.09.2024</div>
                <div className="border-t-2 w-11 border h-px"></div>

                <div>4 Minutes</div>
              </div>
            </div>
            {/* Post Content */}
            <div className="flex-1">
              <div className="whitespace-pre-wrap">
                Seamlessly syndicate cutting-edge architectures rather than
                collaborative collaboration and idea-sharing. Proactively
                incubate visionary interfaces whereas premium benefits.
                Seamlessly negotiate ubiquitous leadership skills rather than
                parallel ideas. Dramatically visualize superior interfaces for
                best-of-breed alignments. Synergistically formulate performance
                based users through customized relationships. Interactively
                deliver cross-platform ROI via granular systems. Intrinsicly
                enhance effective initiatives vis-a-vis orthogonal outsourcing.
                Rapidiously monetize market-driven opportunities with
                multifunctional users. Collaboratively enhance visionary
                opportunities through revolutionary schemas. Progressively
                network just in time customer service without real-time
                scenarios. Synergistically drive e-business leadership with
                unique synergy. Compellingly seize market positioning ROI and
                bricks-and-clicks e-markets. Proactively myocardinate timely
                platforms through distributed ideas. Professionally optimize
                enabled core competencies for leading-edge sources.
                Professionally enhance stand-alone leadership with innovative
                synergy. Rapidiously generate backend experiences vis-a-vis
                long-term high-impact relationships. Authoritatively supply
                market-driven mindshare and bricks-and-clicks opportunities.
                Holisticly create diverse innovation through adaptive
                communities. Efficiently empower seamless meta-services with
                impactful opportunities. Distinctively transition virtual
                outsourcing with focused e-tailers. “ Monotonectally seize
                superior mindshare rather than efficient technology. ”
                Compellingly enhance seamless resources through competitive
                content. Continually actualize 24/365 alignments for
                resource-leveling platforms. Energistically enhance high
                standards in models and professional expertise. Intrinsicly
                iterate extensible metrics for prospective opportunities.
                Continually develop leading-edge experiences through quality
                e-services.
              </div>

              {/* Tags */}
              <div className="my-12 mx-4">
                <span className="px-4 mr-4 rounded-2xl border-2 divide-gray-400 text-gray-700 bg-opacity-25 text-base font-semibold tracking-wider uppercase ">
                  adventure
                </span>
                <span className="px-4 mr-4 rounded-2xl border-2 divide-gray-400 text-gray-700 bg-opacity-25 text-base font-semibold tracking-wider uppercase ">
                  photo
                </span>
                <span className="px-4 mr-4 rounded-2xl border-2 divide-gray-400 text-gray-700 bg-opacity-25 text-base font-semibold tracking-wider uppercase ">
                  design
                </span>
              </div>
              <div className="border-t-2 w-full my-6"></div>
              {/* Author Info */}
              <AuthorInfo />
            </div>
          </div>
        </div>
        {/* Comments */}
        <div className=" flex flex-col justify-center mt-8 px-8  bg-gray-100">
          <div className="w-2/3 mx-auto">

          <h1 className="text-black font-paytone tracking-widest text-xl my-4 ">
            Comments
          </h1>
          <AuthorInfoComment />
          <div>
            <LeaveComment />
          </div>
          </div>
        </div>
      </div>
      {/* Releated Posts */}
      <div className="px-8 ">
        <h1 className="text-black font-bold font-paytone tracking-widest my-8 text-2xl">
          Related Posts
        </h1>
        <div className="grid grid-cols-3 mt-4 place-items-center gap-4 mb-12">
          <EditorPickCard />
          <EditorPickCard />
          <EditorPickCard />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
