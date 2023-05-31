const getJobDetails = async ({ params }) => {
  const fetchData = await fetch("/jobDescription.json");
  const data = await fetchData.json();

  const thisJob = data.find((job) => job.id === params.jobId);

  return thisJob;
};

export default getJobDetails;
