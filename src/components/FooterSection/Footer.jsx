
function FooterSection() {
  return (
    <footer className="bg-gradient-to-b h-fit from-white to-gray-300 p-10 bg-gradient-to-r" aria-labelledby="footer-heading">

        <div className="mt-2 border-t border-gray-200 pt-4">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} NascoTech, Inc. All
            rights reserved.
          </p>
        </div>
     
    </footer>
  );
}

export default FooterSection;
