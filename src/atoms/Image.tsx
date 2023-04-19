import ImageNext from "next/image";
import Facebook from "@/assets/facebook.png";
import Google from "@/assets/google.png";

type imageProps = {
	type: "facebook-logo" | "google-logo";
	className?: string;
};

export default function Image({ className, type }: imageProps) {
	const image_types = {
		"facebook-logo": () => (
			<ImageNext src={Facebook} className={className} alt="facebook logo" />
		),
		"google-logo": () => (
			<ImageNext src={Google} className={className} alt="google logo" />
		),
	};

	return image_types[type]();
}
