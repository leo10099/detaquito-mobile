export const animationConfig = {
	animation: 'spring',
	config: {
		stiffness: 1000,
		damping: 500,
		mass: 10,
		overshootClamping: true,
		restDisplacementThreshold: 0.01,
		restSpeedThreshold: 0.01,
	},
};

// Style Objects
export const RootNavigatorScreenOptions = {
	headerShown: false,
	transitionSpecs: animationConfig,
};
