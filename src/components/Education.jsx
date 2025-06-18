import React from 'react';
import SectionHeading from './SectionHeading';

export default function Education({ data }) {
  const { sectionHeading, allEducation } = data;

  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />
        <div className="row gy-4">
          {allEducation?.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="edu-card">
                <div className="edu-card-inner">
                  {/* FRONT SIDE */}
                  <div className="edu-card-front text-center p-4">
                    <div className="edu-logo mb-3">
                      <img
                        src={item.imgUrl}
                        alt={item.title}
                        style={{
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <h5 className="mb-2 text-dark" style={{ fontSize: '18px' }}>
                      {item.title}
                    </h5>
                    <span className="badge bg-primary">{item.status}</span>
                    <p className="mt-2 text-dark" style={{ fontSize: '15px' }}>
                      {item.year}
                    </p>
                  </div>

                  {/* BACK SIDE */}
                  <div className="edu-card-back text-center p-4">
                    <h6 className="text-dark mb-2" style={{ fontSize: '16px' }}>
                      {item.major}
                    </h6>
                    <p className="text-dark mb-1" style={{ fontSize: '14px' }}>
                      {item.subTitle}
                    </p>
                    {item.gpa && (
                      <p className="mt-2 text-dark" style={{ fontSize: '14px' }}>
                        GPA: {item.gpa}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
