import { GitHub } from "react-feather";

interface Props {
	size?: number;
}

export const Loader = ({ size = 16 }: Props) => (
	<div
		className="flex flex-col items-center"
		data-cy="loader"
	>
		<div className="relative w-fit">
			<div className="absolute animate-[pulseRings_1s_ease-in-out_infinite] rounded-full border-4 border-slate-600 opacity-0" />
			<div
				className="absolute animate-[pulseRings_1s_ease-in-out_infinite] rounded-full border-4 border-slate-600 opacity-0"
				style={{ animationDelay: "500ms" }}
			/>
			<GitHub
				className="animate-pulse"
				size={size}
			/>
		</div>
		<div className="mt-3">Loading...!</div>
	</div>
);
